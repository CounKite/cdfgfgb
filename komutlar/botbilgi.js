const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Bilgi")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Ismi", bot.user.username)
    .addField("Yapıldığı Zaman", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botbilgi"
}