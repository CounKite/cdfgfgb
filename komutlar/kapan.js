const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("**Bot kapanıyor.**").then(msg => {
        console.log("[BOT]Kapanıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

module.exports.help = {
  name: "kapan"
}
