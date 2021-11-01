import assert from 'assert'
import { Context } from 'telegraf'
import { VM } from 'vm2'
import { getExercise, saveCode } from '../storage.service'

const vm = new VM({
  timeout: 1000,
  sandbox: { assert },
})

export async function runCode(ctx: Context) {
  const { text: code, from } = ctx.message as any
  const exercise = await getExercise(process.env.EXERCISE as string)
  await ctx.replyWithHTML(
    `Running this code in <code>node ${process.version}</code> ...`
  )
  try {
    // eslint-disable-next-line no-template-curly-in-string
    const script = exercise.test.replace('${code}', code)
    vm.run(script)
  } catch (e) {
    return ctx.reply(`Oops! Error: ${e.message}`)
  }
  await saveCode(code, from)
  return ctx.replyWithHTML(
    `Good job! This code is <b>${code.length}</b> symbols long, use /status to get your current score!`
  )
}
