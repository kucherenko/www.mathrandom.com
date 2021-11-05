import { Telegraf } from 'telegraf'
import { flags } from './bot/commands/flags'
import { flag } from './bot/commands/flag'
import { runCode } from './bot/commands/run-code'
import { start } from './bot/commands/start'
import { help } from './bot/commands/help'
import { exercise } from './bot/commands/exercise'
import { status } from './bot/commands/status'
const makeHandler = require('lambda-request-handler')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string, {
  telegram: { webhookReply: true },
})

bot.start(start)

bot.help(help)

bot.command('exercise', exercise)

bot.command('flags', flags)

bot.command('flag', flag)

bot.command('status', status)

bot.command('env', (ctx) => {
  ctx.replyWithHTML(`<b>node</b> ${process.version}`)
})

bot.on('text', runCode)

bot.launch()

export const handler = makeHandler(
  bot.webhookCallback(process.env.BOT_HOOK_PATH ?? '/')
)
