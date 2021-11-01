import { Context } from 'telegraf'
import { getFlagById, getPlayer, saveAnswer } from '../storage.service'

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
      const player = await getPlayer(from.id)
      try {
        await saveAnswer(answer, flag, player)
      } catch (e) {
        return ctx.reply(e.message)
      }

      ctx.replyWithHTML(
        `Good job! Your bonus <b>-${
          +flag.bonus * 100
        }%</b>. Use /status to get information about your score.`
      )
    } else {
      ctx.reply('Sorry, this answer is not correct. Please, try again!')
    }
  }
}
