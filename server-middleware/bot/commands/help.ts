import { Context } from 'telegraf'

export async function help(ctx: Context) {
  await ctx.replyWithHTML(`
Math.random() Biathlon competition bot.

The bot help to make competition with two activities:

1. Write shorter implementation for exercise
2. Find flags and get bonus, bonus apply to task length

Example:
code length is 100 and player have found 2 flags with 10% of bonus of each flag,
total = length - length * (sum of bonuses/100) = 100 - 100 (20 / 100) = 80

Send javascript code to the bot for check exercise implementation and length of code.

Bot commands:
/help - show this message
/exercise - show exercise description
/flags - show all flags tips
/status - information about current points
/flag {flag number} {result} - check flag and get bonus
/env - show information about environment for code running
`)
}
