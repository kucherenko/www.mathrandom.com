import { Context } from 'telegraf'
import { Flag, getFlags } from '../storage.service'

export async function flags(ctx: Context) {
  const flags = await getFlags()
  ctx.replyWithHTML(`
    <b>Flag tips</b>

 ${flags
   .map(
     (flag: Flag) =>
       `<b>Flag #${flag.id}</b> (bonus -${100 * +flag.bonus}%):

<code>${flag.input}</code>`
   )
   .join('\n\n ')}
   
   To capture a flag send the answer via <pre>/flag {number} {answer}</pre> bot command.
   E.g. if you discovered that the answer to the first flag challenge is "The_Answer", then send <pre>/flag 1 The_Answer</pre>.
  `)
}
