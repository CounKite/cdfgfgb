const Discord = module.require('discord.js');
var request = require('request');
var cheerio = require('cheerio');

function getStatData(location, $) {

    var selector = $('.stats-stat .value').eq(location).text();

    var stat_array = $.parseHTML(selector);

    var stat = 0;

    if (stat_array == null || stat_array.lengh == 0) {
        return -1;

    } else {
        stat = stat_array[0].data;
    }

    return stat;
}

module.exports.run = async (bot, message, args) => {

    var UR_L = "http://csgo.tracker.network/profile/" + args[0];

    if (!args[0]) {
        return message.channel.send(":x: Lütfen geçerli bir STEAMID64 veya URL girdiğinden emin ol.");
    }

    request(UR_L, function(err, resp, body) {

        $ = cheerio.load(body);

        var KD = getStatData(0, $);
        if (KD == -1) {
            message.channel.send(":x: Hata, aradığın profilin gizli olmadığına ve doğru bir şekilde STEAMID64 veya doğru bir URL girdiğinden emin ol.");
            return;
        }

        var WIN = getStatData(1, $);
        var HS = getStatData(4, $);
        var MONEY = getStatData(5, $);
        var SCORE = getStatData(6, $);
        var KILLS = getStatData(7, $);
        var DEATHS = getStatData(8, $);
        var MVP = getStatData(9, $);
        var BS = getStatData(13, $);
        var BD = getStatData(14, $);
        var HR = getStatData(15, $);

        var STAT = new Discord.RichEmbed()

            .setTitle("__***CSGO Bilgileri***__")
            .setURL(UR_L)
            .setColor("0x#FF0000")
            .addField("Toplam KD", KD, true)
            .addField("Kazanma", `${WIN}%`, true)
            .addField("Toplam Kurtardığı Rehin", HR, true)
            .addField("Toplam Para", MONEY, true)
            .addField("Toplam Skor", SCORE, true)
            .addField("Toplam Kill", KILLS, true)
            .addField("Toplam Ölüm", DEATHS, true)
            .addField("MVP", MVP, true)
            .addField("Total Bomba Kurma", BS, true)
            .addField("Toplam Bomba Çözme", BD, true)
            .addField("Toplam HSler", HS, true);


        message.channel.send(STAT);

    })
}

module.exports.help = {
    name: "csgo"
}