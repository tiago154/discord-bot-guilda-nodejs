const bot = require('../../bot')
const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../config')
const { getByCEP } = require('./service')

const buildUrlMaps = ({ address, lat, lng }) =>
  encodeURI(`https://www.google.com/maps/place/${address}/@${lat},${lng},17z`)

bot.on('message', async message => {
  if (message.content.startsWith(`${prefix} cep:`)) {
    const args = message.content.slice(`${prefix} cep:`.length)
    if (args) {
      const cep = args
      const result = await getByCEP(cep)

      if (!result.message) {
        const messageEmbed = new MessageEmbed()
          .setColor('BLUE')
          .setTitle('Google Maps click aqui!')
          .setDescription(`Informações de ${cep}`)
          .addField('Estado', result.state, true)
          .addField('Cidade', result.city, true)
          .addField('Bairro', result.district)
          .addField('Endereço', result.address)
          .addField('Latitude', result.lat, true)
          .addField('Longitude', result.lng, true)
          .setURL(buildUrlMaps(result))

        return message.channel.send('Segue os dados', messageEmbed).then(message => message.react('🗺️'))
      }

      return message.channel.send(`${result.message} :cry:`)
    }
  }
})

bot.on('message', message => {
  if (message.content === `${prefix} cep` || message.content === `${prefix} cep:`) {
    message.reply('Coloque o cep na frente de !bombril cep:<cep>')
  }
})
