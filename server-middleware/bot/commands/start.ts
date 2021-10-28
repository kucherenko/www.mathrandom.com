import { Context } from 'telegraf'
import { registerPlayer } from '../storage.service'

export async function start(ctx: Context) {
  const { from } = ctx.message as any
  const player = await registerPlayer(from)
  if (!player) {
    return
  }
  if (player.is_new) {
    ctx.reply('Welcome! Use /help for get more information about the bot.')
  } else {
    ctx.reply('Welcome Back! Dont forget about /help')
  }
}
