const Discord = require('discord.js');
var request = require('request');

module.exports.run = (client, message, args) => {
    request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        message.channel.sendEmbed(new Discord.RichEmbed().setImage(info.link)); // ve konsola çıktıyı versin.
    }
})};

module.exports.help = {
  name: 'atatürk'
};