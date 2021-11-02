import { Context } from 'telegraf'

export async function help(ctx: Context) {
  await ctx.replyWithHTML(`
<b>Math.random() Biathlon Bot 🤖</b>

Our challenge consists of two parts: writing a short implementation of the /exercise and capturing the /flags.

Your base score would be the length of your JS solution (the lower — the better!).
And every captured flag would grant you some reduction to your summary score.

Example:
If your code length is 100 and you found two flags with 5% and 15% bonuses, then your summary score would be:
<pre>summary = 100 - 100 * (0.05 + 0.15) = 80</pre>

<b>Send your javascript code directly to this bot to submit your solution.</b>
Then read the /flags tips and capture them using <pre>/flag {flag number} {answer}</pre> command!
Send /status - to get your current score at any time.

Good Luck! 🍀

All bot commands:
/help - show this message
/exercise - show exercise description
/flags - show all flags tips
/status - information about current score
/flag {flag number} {result} - submit a flag solution and get a bonus for it
/env - show information about the code execution environment

For bug reporting use the form - https://airtable.com/shrbbd4zAW5AJGmkf
`)
}
