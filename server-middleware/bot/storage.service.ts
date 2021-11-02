import { User } from 'typegram/manage'
import { nanoid } from 'nanoid'
import { Record } from 'airtable'

const NodeCache = require('node-cache')

const Airtable = require('airtable')
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
})
const base = Airtable.base(process.env.AIRTABLE_BASE)

export interface Player {
  id?: string
  uid?: string
  username?: string
  first_name?: string
  last_name?: string
  language?: string
  is_new?: boolean
}

export interface Flag {
  _id: string
  id: string
  input: string
  result: string
  bonus: number
}

const myCache = new NodeCache({
  stdTTL: 60,
})

export async function getExercise(name: string) {
  if (myCache.get('exercise-' + name)) {
    return myCache.get('exercise-' + name)
  }
  const [exercise] = await base('exercise')
    .select({
      maxRecords: 1,
      filterByFormula: `{name} = "${name}"`,
    })
    .firstPage()
  const result = { id: exercise.id, ...exercise.fields }
  myCache.set('exercise-' + name, result)
  return result
}

export async function getPlayer(uid: number, cache = true) {
  if (cache && myCache.get('player-' + uid)) {
    return myCache.get('player-' + uid)
  }
  const [existingUser] = await base('players')
    .select({
      filterByFormula: `{uid} = "${uid}"`,
    })
    .firstPage()
  if (!existingUser) {
    return false
  }
  const player = { id: existingUser.id, ...existingUser.fields }
  myCache.set('player-' + uid, player)
  return player
}

export async function getFlagById(id: string) {
  const flags = await getFlags()
  return flags.find((flag: Flag) => +flag.id === +id)
}

export async function getFlags() {
  const cachedFlags = myCache.get('flags')
  if (cachedFlags) {
    return cachedFlags
  }
  const flags = await base('flags')
    .select({
      sort: [{ field: 'id', direction: 'asc' }],
    })
    .firstPage()
  const result = flags.map((record: Record<any>) => {
    return {
      _id: record.id,
      ...record.fields,
    }
  })
  myCache.set('flags', result)
  return result
}

export async function registerPlayer(
  player: User
): Promise<Player | undefined> {
  if (!player.is_bot) {
    const existingUser = await getPlayer(player.id)
    if (!existingUser) {
      const user = await base('players').create(
        {
          uid: '' + player.id,
          username: player.username,
          first_name: player.first_name,
          last_name: player.last_name,
          language: player.language_code,
        },
        { typecast: true }
      )
      myCache.set('player-' + player.id, { id: user.id, ...user.fields })
      return { id: user.id, ...user.fields, is_new: true }
    } else {
      return existingUser
    }
  }
}

export async function saveCode(code: string, user: User) {
  let player = await getPlayer(user.id)
  if (player) {
    player = await registerPlayer(user)
  }
  if (player) {
    const data = {
      commit: nanoid(8),
      player: [player.id],
      body: code,
      length: code.length,
    }
    if (player.points > code.length || player.points === 0) {
      myCache.del('player-' + player.id)
    }
    const savedCode = await base('code').create(data, { typecast: true })
    return { id: savedCode.id, ...savedCode.fields }
  }
}

export async function saveAnswer(answer: string, flag: Flag, player: Player) {
  if (player) {
    const existingAnswers = await base('answers')
      .select({
        filterByFormula: `AND({player}="${player.uid}",{task}="${flag.id}")`,
      })
      .firstPage()
    if (existingAnswers.length > 0) {
      throw new Error('Answer for the task already saved.')
    }
    myCache.del('player-' + player.id)
    const data = {
      commit: nanoid(8),
      player: [player.id],
      task: [flag._id],
      body: answer,
      bonus: flag.bonus,
    }
    const answerObject = await base('answers').create(data, { typecast: true })
    return { id: answerObject.id, ...answerObject.fields }
  }
}
