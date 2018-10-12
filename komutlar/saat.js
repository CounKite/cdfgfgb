const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
    const saat = new Discord.RichEmbed()
    .setColor()
    .addField('Türkiye saati', `${moment().format('HH:mm:ss')}`)
    .setFooter('Least Army <3', '')
    .setTimestamp()
    message.react(':white_check_mark:')
    return message.channel.sendEmbed(saat);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zaman', 'vaxt'],
  permLevel: 0,
  kategori: "bot" //Komutun kategorisini belirtiyoruz
};

exports.help = {
  name: 'saat',
  description: 'Saatı gösterir.',
  usage: 'saat'
};