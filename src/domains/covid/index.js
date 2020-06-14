const bot = require('../../bot')
const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../config')
const { getByCountry } = require('./service')

const buildGoogleUrlSearch = ({ country }) =>
  encodeURI(`https://www.google.com/search?q=covid ${country}`)

bot.on('message', async message => {
  if (message.content.startsWith(`${prefix} covid:`)) {
    const args = message.content.slice(`${prefix} covid:`.length)
    if (args) {
      const country = args
      const result = await getByCountry(country)

      if (!result.message) {
        const messageEmbed = new MessageEmbed()
          .setColor('GREEN')
          .setTitle('Noticias Covid click aqui!')
          .setDescription(`Informações ${result.country}`)
          .setImage(result.countryInfo.flag)
          .addField('Total de casos', result.cases, true)
          .addField('Mortes', result.deaths, true)
          .addField('Recuperados', result.recovered, true)
          .addField('Casos hoje', result.todayCases, true)
          .addField('Mortes hoje', result.todayDeaths, true)
          .addField('Recuperados hoje', result.todayRecovered, true)
          .setURL(buildGoogleUrlSearch(result))

        return message.channel.send('Segue os dados', messageEmbed).then(message => message.react('😧'))
      }

      return message.channel.send('País não localizado, tente escrever o país em ingles ou a sigla, exemplo: BR, BRA ou Brazil')
    }
  }
})

bot.on('message', message => {
  if (message.content === `${prefix} covid` || message.content === `${prefix} covid:`) {
    message.reply('Coloque o país na frente de !bombril covid:<país>, exemplo: !bombril covid:br ou !bombril covid:brazil')
  }
})
