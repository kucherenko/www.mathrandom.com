import { Context } from 'telegraf'
import { getPlayer, registerPlayer } from '../storage.service'

export async function status(ctx: Context) {
  const { from } = ctx.message as any
  let player = await getPlayer(from.id, false)
  if (!player) {
    player = await registerPlayer(from)
  }
  if (!player) {
    await ctx.reply('Sorry, some errors in the bot. Please retry later.')
    return console.log('Player not found ' + JSON.stringify(from, null, ' '))
  }

  ctx.replyWithHTML(`
${
  player.points
    ? '<b>Code length</b>: ' + player.points
    : "You haven't submitted a working solution yet."
}
<b>Bonus</b>: -${+player.bonus * 100}%
<b>Total</b>: ${player.total}
`)
}
