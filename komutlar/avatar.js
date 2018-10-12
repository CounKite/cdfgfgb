//Avatar komudu ile, oyunculara avatarlarını gösterebilirsiniz.//
//Made by Croxy#9873//

const Discord = require('discord.js') //Bizim için en önemli olan, discord.js modülünü indiriyoruz.

module.exports.run = async (bot, message, args) => { //Kodlarımızı gireceğimiz yeri ayarlıyoruz.
    const EtiketlenenKullanici = message.mentions.users.first(); //Avatarını göstereceğimiz kullanıcı: Mesajda etiketlenen kullanıcı
    if(EtiketlenenKullanici) { //Eğer kullanıcı etiketlenmiş ise,
        const EtiketlenenAvatarEmbed = new Discord.RichEmbed() //Fotoğrafı gönderdiğimizde daha havalı gözükmesi için bir EMBED oluşturuyoruz.
        .setColor('RANDOM') //Rengi rastgele göndermesi olarak ayarlıyoruz.
        .setAuthor('LeastBlack | Avatar Sistemi') //En üstte yazacak yazımız
        .setImage(EtiketlenenKullanici.avatarURL) //Etiketlediğimiz kullanıcın avatarını gösteriyoruz.
        .setFooter(message.author.username + ' tarafından istendi.') //Komudu kullanan kişiyi söylüyoruz.
        message.channel.send(EtiketlenenAvatarEmbed)
        }//Bu komudu bitiriyoruz.
    if(!EtiketlenenKullanici) { //Eğer kullanıcı etiketlenmemiş ise,
        const AvatarEmbed = new Discord.RichEmbed() //Fotoğrafı gönderdiğimizde daha havalı gözükmesi için bir EMBED oluşturuyoruz.
        .setColor('RANDOM') //Rengi rastgele göndermesi olarak ayarlıyoruz.
        .setAuthor('LeastBlack | Avatar Sistemi') //En üstte yazacak yazımız
        .setImage(message.author.avatarURL) //Komudu kullananın avatarını gösteriyoruz.
        .setFooter(message.author.username + ' tarafından istendi.') //Komudu kullanan kişiyi söylüyoruz.
        message.channel.send(AvatarEmbed)
        }//Bu komudu bitiriyoruz.
}//Komudumuzu bitiriyoruz.

module.exports.help = { //Komudumuzu kullanmamıza yarayan yerleri giriyoruz.
    name: 'avatar' //Komudumuzun ismini giriyoruz.
}//Ve komudumuzu bitiriyoruz.