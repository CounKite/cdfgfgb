const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bunun için yetkin yok!').setColor('RANDOM'));
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Duyuru yapmak için birşey yazmalısın.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(args.join(" "))
    .setFooter(`Duyuruyu yapan: ${message.author.tag}`)
    message.channel.send({embed})
};

module.exports.help = {
  name: 'duyuru'
};