const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  const emoji = client.emojis.get(args[0]);
 const emoteurl = emoji.url
  const eembed = new Discord.RichEmbed()
  .setAuthor("Emoji Bilgi"," https://discordemoji.com/assets/emoji/owo.png")
  .addField("» Emoji İsmi",emoji.name)
   .setThumbnail(emoteurl)
    .addField("» Emoji Id",emoji.id)
    .addField("» Yapıldığı Tarih",emoji.createdAt)
   
if(isNaN(args[0])) return message.channel.send("Emoji ismi sadece **NaN** veya bir **ID** olmalıdır.")
  
  message.channel.send(eembed)

}

module.exports.help = {
  name:"emojibilgi"
}