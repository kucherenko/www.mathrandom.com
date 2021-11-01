import { Context } from 'telegraf'
import { registerPlayer } from '../storage.service'

export async function start(ctx: Context) {
  const { from } = ctx.message as any
  const player = await registerPlayer(from)
  if (!player) {
    return
  }

  ctx.replyWithHTML(`
    <b>Welcome to Math.random() Biathlon Challenge!</b>

    Use /challenge command to get challenge details.
    Use /flags to get flags tips.
    Use /help to get more information about the bot.

    Good Luck 🍀
  `)
}
