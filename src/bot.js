const { Client } = require('discord.js')
const { token } = require('./config')
const bot = new Client()

bot.login(token)

bot.once('ready', () => console.log(`${bot.user.tag}`))

module.exports = bot
