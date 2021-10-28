import { Context } from 'telegraf'
import { getPlayer } from '../storage.service'

export async function status(ctx: Context) {
  const { from } = ctx.message as any
  const player = await getPlayer(from.id)

  ctx.replyWithHTML(`
${
  player.points
    ? '<b>Code length</b>: ' + player.points
    : "Don't implemented exercise yet."
}
<b>Bonus</b>: -${+player.bonus * 100}%
<b>Total</b>: ${player.total}
`)
}
