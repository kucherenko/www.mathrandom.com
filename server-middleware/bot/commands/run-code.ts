import assert from 'assert'
import vm from 'vm'
import { Context } from 'telegraf'
import { getExercise, saveCode } from '../storage.service'

export async function runCode(ctx: Context) {
  const context = { assert }
  const { text: code, from } = ctx.message as any
  const exercise = await getExercise(process.env.EXERCISE as string)
  await ctx.replyWithHTML(
    `Run the code (node ${process.version})

<pre>${code}</pre> `
  )
  try {
    // eslint-disable-next-line no-template-curly-in-string
    const script = new vm.Script(exercise.test.replace('${code}', code))
    script.runInContext(vm.createContext(context))
  } catch (e) {
    return ctx.reply(`Oops! Error: ${e.message}`)
  }
  await saveCode(code, from)
  return ctx.replyWithHTML(`Good job! Now your base score is <b>${code.length}</b>, use /status to get the summary`)
}
