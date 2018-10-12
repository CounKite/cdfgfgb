const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (!args[0]) {

	const yardim = {};
   client.commands.forEach((komut) => {
   const x = komut.conf.kategori;
   if (!yardim.hasOwnProperty(x)) yardim[x] = [];
   yardim[x].push(`\`${komut.help.name}\`: ${komut.help.description}`);
    });

   var y = `\`\`\`yaml\n${client.user.username} - Komutları \n\nBir komut hakkında ayrıntılı bilgi için "${client.ayarlar.prefix}yardım <komut adı>" yazabilirsiniz. \n\`\`\``
   for (const kategori in yardim) {
   	let k = kategori
   	.replace("bot", "bot komutları")
   	.replace("kullanıcı", "kullanıcı komutları")
   	.replace("eğlence", "eğlence komutları")
   	.replace("yapımcı", "bot yapımcısı komutları")
    .replade("sunucu", "sunucu komutları")

    y += `**${k.charAt(0).toUpperCase() + k.slice(1)}:** \n${yardim[kategori].join(" \n")}\n\n`

   }

   message.author.send(y, {split: true})

   let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription("Özel Mesajlarını Kontrol Et! :postbox: ")
   message.channel.send({embed: embed})
   return
  }

if (args[0]) {
    
    if (client.commands.has(args[0]) ? client.commands.has(args[0]) : client.aliases.has(args[0])) {
      var komut = client.commands.get(args[0]) ? client.commands.get(args[0]) : client.commands.get(client.aliases.get(args[0]))
      
  var perm = komut.conf.permLevel.toString()
		 .replace("0", `Yetki gerekmiyor.`)
			.replace("1", `Mesajları Yönet yetkisi gerekiyor.`)
			.replace("2", `Üyeleri At yetkisi gerekiyor.`)
      .replace("3", `Üyeleri Yasakla yetkisi gerekiyor.`)
			.replace("4", `Yönetici yetkisi gerekiyor.`)
			.replace("5", `Bot Yapımcısı yetkisi gerekiyor.`)
      
			const embed = new Discord.RichEmbed()
			.addField("Komut Adı", komut.help.name)
      .addField("Açıklaması", komut.help.description || "Bulunmuyor")
      .addField("Kategorisi", komut.conf.kategori || "Bulunmuyor")
      .addField("Gerekli Yetki", perm || "Bulunmuyor")
      .addField("Doğru Kullanımı", komut.help.usage || "Bulunmuyor")
      .addField("Komutun Diğer Adları", komut.conf.aliases.join(', ') ||"Bulunmuyor")
			.setColor("RANDOM")
			 message.channel.send({embed: embed})
      
		} else {
			const embed = new Discord.RichEmbed()
				.setDescription(`Botta ${args[0]} isminde bir komut bulunamadı! Botun tüm komutlarını ${client.ayarlar.prefix}yardım yazarak görebilirsin!`)
				.setColor("RANDOM")
			message.channel.send({embed: embed})
    }
    return
  }
  
};

exports.conf = {
	enable: true, //komut kullanılabilir durumdamı değil mi onu belirtiyoruz true veya false olarak
	aliases: ["help", "h", "y"], //komutu asıl ismi dışında kullanabileceğimiz isimleri yazıyorsunuz
	permLevel: 0, /*Kullanabilecek yetkiyi belirtiyorsunuz bulunan yetkilerin sayıları:
	0 = Yetki gerekmez herkes kullanabilir.
	1 = Mesjları Yönet yetkisi gerekir.
	2 = Üyeleri At yetkisi gerekir.
	3 = Üyeleri Yasakla yetkisi gerekir.
	4 = Yönetici yetkisi gerekir.
	5 = Bot yapımcısı olmak gerekir.
	*/
	kategori: "bot" //Komutun kategorisini belirtiyoruz
};

exports.help = {
	name: "yardım", //Komutun ismini belirtiyoruz
	description: "Tüm komutları listeler.", //Komutun açıklamasını yazıyoruz
	usage: "yardım veya yardım <komut adı>" //Komutun Doğru Kullanım'ını yazıyoruz
};
