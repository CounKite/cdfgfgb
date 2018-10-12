const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Wuhuuuu! Güzel Yumruktu!')
    .setColor(3447003)
    .setFooter('LeastBlack | https://discord.gg/ZpcR3p', bot.user.avatarURL)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://images-ext-1.discordapp.net/external/PuwTSVuQ_p-dYCI_XAfYgzxvOaNiGsOq3cdYxORu4J4/http/exorcist-soft.ucoz.ru/images/BAN.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

module.exports.help = {
  name: "yumruh-at"
}