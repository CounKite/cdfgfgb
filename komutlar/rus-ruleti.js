module.exports.run = async (bot, message, args) => {
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    // console.log(randomNumber);
    if(randomNumber==2){
        message.reply("El-Fatiha! 💀");
    }else{
        message.reply("Yaşıyon hala mq! 😃");
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['zaman', 'vaxt'],
    permLevel: 0,
    kategori: "eğlence" //Komutun kategorisini belirtiyoruz
  };

module.exports.help = {
  name:"rus-ruleti"
}