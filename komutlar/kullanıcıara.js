const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
      let users = client.users;
      let searchTerm = args[0];
      if(!searchTerm) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kullanıcı ara;').setDescription(message.author.tag + ', kullanım: >avatar <mesaj>.').setFooter('LeastBlack', client.user.avatarURL).setTimestamp());
      let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
      message.channel.send(`Bulunan Arama sonuçları;\n:arrow_right:` + matches.map(u => u.tag).join(',\n:arrow_right: '));
        };
module.exports.help = {
  name: 'kullanıcı-ara'
};