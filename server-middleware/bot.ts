import { Telegraf } from 'telegraf'
import { flags } from './bot/commands/flags'
import { flag } from './bot/commands/flag'
import { runCode } from './bot/commands/run-code'
import { start } from './bot/commands/start'
import { help } from './bot/commands/help'
import { exercise } from './bot/commands/exercise'
import { status } from './bot/commands/status'

const app = require('express')()

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string)

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

const secretPath = `/telegraf/${bot.secretPathComponent()}`
const fullPath = `${process.env.TELEGRAM_BOT_URL}/api/v1/bot${secretPath}`
bot.telegram.setWebhook(fullPath)
app.use(bot.webhookCallback(secretPath))
module.exports = { path: '/api/v1/bot', handler: app }
