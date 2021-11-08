import assert from 'assert'
import { Context } from 'telegraf'
import { getExercise, saveCode } from '../storage.service'
const vm = require('vm')

export async function runCode(ctx: Context) {
  const { text: code, from } = ctx.message as any
  console.log(`Player ${from.id} run code ${code}`)
  const exercise = await getExercise(process.env.EXERCISE as string)
  await ctx.replyWithHTML(
    `Running this code in <code>node ${process.version}</code> ...`
  )
  try {
    // eslint-disable-next-line no-template-curly-in-string
    const script = exercise.test.replace('${code}', code)
    vm.runInNewContext(
      script,
      { assert: Object.freeze({ ...assert }) },
      { timeout: 1000 }
    )
  } catch (e) {
    return ctx.reply(`Oops! Error: ${e.message}`)
  }
  await saveCode(code, from)
  return ctx.replyWithHTML(
    `Good job! This code is <b>${code.length}</b> symbols long, use /status to get your current score!`
  )
}
