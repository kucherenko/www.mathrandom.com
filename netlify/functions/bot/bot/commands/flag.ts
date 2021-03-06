import { Context } from 'telegraf'
import {
  getFlagById,
  getPlayer,
  registerPlayer,
  saveAnswer,
} from '../storage.service'

export async function flag(ctx: Context) {
  const { text, from } = ctx.message as any
  if (text && from) {
    console.log(`Player ${from.id} run send flag ${text}`)
    const [, no, ...answerParts] = text.split(' ')
    if (!no || !answerParts) {
      return ctx.reply('Use /flag {flag number} {result} command')
    }
    const answer = answerParts.join(' ')

    const flag = await getFlagById(no)

    if (!flag) {
      return ctx.reply(
        'The flag number is wrong. Use /flags to get the correct flag number'
      )
    }

    if (flag.result.toLowerCase() === answer.toLowerCase()) {
      let player = await getPlayer(from.id)
      if (!player) {
        player = await registerPlayer(from)
      }
      if (!player) {
        await ctx.reply('Sorry, some errors in the bot. Please retry later.')
        return console.log(
          'Player not found ' + JSON.stringify(from, null, ' ')
        )
      }

      try {
        await saveAnswer(answer, flag, player)
      } catch (e) {
        return ctx.reply(e.message)
      }

      await ctx.replyWithHTML(
        `Good job! Your bonus <b>-${
          +flag.bonus * 100
        }%</b>. Use /status to get information about your score.`
      )
    } else {
      await ctx.reply('Sorry, this answer is not correct. Please, try again!')
    }
  }
}
