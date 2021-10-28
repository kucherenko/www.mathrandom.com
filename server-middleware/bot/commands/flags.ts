import { Context } from 'telegraf'
import { Flag, getFlags } from '../storage.service'

export async function flags(ctx: Context) {
  const flags = await getFlags()
  ctx.replyWithHTML(`
    List of tasks, for check a flag send following command <pre>/flag {number} {answer}</pre>
 ${flags
   .map(
     (flag: Flag) =>
       `<b>${flag.id}</b>. ${flag.input} (bonus -${100 * +flag.bonus}%)`
   )
   .join('\n ')}
  `)
}
