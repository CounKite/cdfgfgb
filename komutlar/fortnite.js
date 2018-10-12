const Discord = require("discord.js");
const Fortnite = require("fortnite");
const ftnApi = new Fortnite("2c4e777f-0563-4c0e-835f-3d2a1514a740");
//Above, you need to get your api key. Register and generate a TRN-Api-Key at https://fortnitetracker.com/site-api
const currentSeason = "5";


//The current commands are
// <prefix> <epic-username> [platform pc/psn/xbl]  (ex /fortnite Dark pc)
// <prefix> <epic-username> [platform pc/psn/xbl] {mode all/season}  (ex /fortnite Dark pc all)
// <prefix> drop
// For lifetime stats use: <prefix> <epic-username> (ex /fortnite Dark)


module.exports.run = async (bot, message, args) => {
    //Fortnite drop command
    if (args[0] == "drop") {
        let places = [
            "Lazy Links",
            "Dusty Divot",
            "Fatal Fields",
            "Flush Factory",
            "Greasy Grove",
            "Haunted Hills",
            "Junk Junction",
            "Lonely Lodge",
            "Loot Lake",
            "Lucky Landing",
            "Paradise Palms",
            "Pleasant Park",
            "Retail Row",
            "Risky Reels",
            "Salty Springs",
            "Shifty Shafts",
            "Snobby Shores",
            "Tilted Towers",
            "Tomato Town",
            "Wailing Woods"
        ];

        let picker = Math.floor(Math.random() * places.length); //Randomely picks a spot

        return message.channel.send(places[picker]); //Sends randomely picked spot
    }
    //Fortnite stats
    let username = args[0]; //Gets username
    let platform = args[1] || "pc"; //Gets platform, default: pc
    let mode = "life"; //Default stats: lifetime

    if (args[2]) {
        if (args[2].toLowerCase() == "all" || args[2].toLowerCase() == "season") {
            mode = args[2]; //Gets stats type, all or season stats
        } else {
            return message.channel.send(
                "Hata. Doğru şekilde kullanın: `lb!fortnite <oyuncu-ismi> [platform pc/xbl/psn] {tüm modlar/sezonlar}`.\nTüm zamanlar için `lb!fornite <oyuncu-ismi> [platform pc/xbl/psn]`\n\n**Least Army**`"
            ); //Sends error message
        }
    }

    if (!username)
        //No username specified?
        return message.channel.send(
            "Kullanıcı ismi yanliş girildi. Doğru şekilde kullanın: `lb!fortnite <oyuncu-ismi> [platform pc/xbl/psn] {tüm modlar/sezonlar}`.\nTüm zamanlar için `lb!fornite <oyuncu-ismi> [platform pc/xbl/psn]`\n\n**Least Army**`"
        ); //Sends error message

    let data = ftnApi
        .user(username, platform)
        .then(data => {
            let stats = data.stats; //Raw stats
            if (mode == "life") {
                let lifetime = stats.lifetime; //Lifetime stats
                let lifeScore = lifetime[6]["Score"];
                let lifeMatches = lifetime[7]["Matches Played"];
                let lifeWins = lifetime[8]["Wins"];
                let lifeWinPercent = lifetime[9]["Win%"];
                let lifeKills = lifetime[10]["Kills"];
                let lifeKd = lifetime[11]["K/d"];

                let lifeEmbed = new Discord.RichEmbed()
                    .setTitle("## Fortnite Tüm Zaman Bilgileri ##")
                    .setThumbnail(
                        "https://blog.lifetime.com/imagecache/Blog/Generic%20Lifetime%20Banner%20Blog.png"
                    )
                    .setDescription(`${data.username} İçin Tüm Zaman Bilgileri`)
                    .setColor("#42b6f4")
                    .addField("Kazanmalar", lifeWins, true)
                    .addField("Öldürmeler", lifeKills, true)
                    .addField("K/D", lifeKd, true)
                    .addField("Oynadığı Oyunlar", lifeMatches, true)
                    .addField("Skor", lifeScore, true)
                    .addField("Kazanım Percenti", lifeWinPercent, true)

                message.channel.send(lifeEmbed); //Sends lifetime stats
            }

            if (mode.toLowerCase() == "all") {
                //Solo stats
                let solo = stats.solo;
                let soloScore = solo.score;
                let soloMatches = solo.matches;
                let soloWins = solo.wins;
                let soloKills = solo.kills;
                let soloKd = solo.kd;

                let soloEmbed = new Discord.RichEmbed()
                    .setTitle("## Fortnite Solo Bilgileri ##")
                    .setThumbnail("https://s3.amazonaws.com/media.atp/42511_solof.png")
                    .setDescription(`${data.username} İçin Solo Bilgileri`)
                    .setColor("#42b6f4")
                    .addField("Kazanmalar", soloWins, true)
                    .addField("Öldürmeler", soloKills, true)
                    .addField("K/D", soloKd, true)
                    .addField("Oynadığı Oyunlar", soloMatches, true)
                    .addField("Skor", soloScore, true)
                message.channel.send(soloEmbed); //Send solo stats

                //Duo stats
                let duo = stats.duo;
                let duoScore = duo.score;
                let duoMatches = duo.matches;
                let duoWins = duo.wins;
                let duoKills = duo.kills;
                let duoKd = duo.kd;

                let duoEmbed = new Discord.RichEmbed()
                    .setTitle("## Fortnite Duo Bilgileri ##")
                    .setThumbnail(
                        "http://www.dualski.com/wp-content/uploads/2015/08/Duo.png"
                    )
                    .setDescription(`${data.username} İçin Duo Bilgileri`)
                    .setColor("#42b6f4")
                    .addField("Kazanmalar", duoWins, true)
                    .addField("Öldürmeler", duoKills, true)
                    .addField("K/D", duoKd, true)
                    .addField("Oynadığı Oyunlar", duoMatches, true)
                    .addField("Skor", duoScore, true)
                message.channel.send(duoEmbed); //Send duo stats

                //Squad stats
                let squad = stats.squad;
                let squadScore = squad.score;
                let squadMatches = squad.matches;
                let squadWins = squad.wins;
                let squadKills = squad.kills;
                let squadKd = squad.kd;

                let squadEmbed = new Discord.RichEmbed()
                    .setTitle("## Fortnite Squad Bilgileri ##")
                    .setThumbnail(
                        "https://images.joinsquad.com/Logos/squadlogo_black_hires.png"
                    )
                    .setDescription(`${data.username} İçin Squad Bilgileri`)
                    .setColor("#42b6f4")
                    .addField("Kazanmalar", squadWins, true)
                    .addField("Öldürmeler", squadKills, true)
                    .addField("K/D", squadKd, true)
                    .addField("Oynadığı Oyunlar", squadMatches, true)
                    .addField("Skor", squadScore, true)
                message.channel.send(squadEmbed); //Send squad stats
            }

            if (mode.toLowerCase() == "season") {
                //Solo season stats
                let currentSolo = stats.current_solo;
                let currentSoloScore = currentSolo.score;
                let currentSoloMatches = currentSolo.matches;
                let currentSoloWins = currentSolo.wins;
                let currentSoloKills = currentSolo.kills;
                let currentSoloKd = currentSolo.kd;

                let currentSoloEmbed = new Discord.RichEmbed()
                    .setTitle(`## Fortnite Sezonu ${currentSeason} Solo Bilgileri ##`)
                    .setThumbnail("https://s3.amazonaws.com/media.atp/42511_solof.png")
                    .setDescription(
                        `Sezon ${currentSeason} ${data.username} İçin Solo Bilgileri`
                    )
                    .setColor("#42b6f4")
                    .addField("Kazanmalar", currentSoloWins, true)
                    .addField("Öldürmeler", currentSoloKills, true)
                    .addField("K/D", currentSoloKd, true)
                    .addField("Oynadığı Oyunlar", currentSoloMatches, true)
                    .addField("Skor", currentSoloScore, true)
                message.channel.send(currentSoloEmbed); //Send solo season stats

                //Duo season stats
                let currentDuo = stats.current_duo;
                let currentDuoScore = currentDuo.score;
                let currentDuoMatches = currentDuo.matches;
                let currentDuoWins = currentDuo.wins;
                let currentDuoKills = currentDuo.kills;
                let currentDuoKd = currentDuo.kd;

                let currentDuoEmbed = new Discord.RichEmbed()
                    .setTitle(`## Fortnite Sezonu ${currentSeason} Duo Bilgileri ##`)
                    .setThumbnail(
                        "http://www.dualski.com/wp-content/uploads/2015/08/Duo.png"
                    )
                    .setDescription(
                        `Sezon: ${currentSeason} ${data.username} İçin Duo Bilgileri`
                    )
                    .setColor("#42b6f4")
                    .addField("Kazanmalar", currentDuoWins, true)
                    .addField("Öldürmeler", currentDuoKills, true)
                    .addField("K/D", currentDuoKd, true)
                    .addField("Oynadığı Oyunlar", currentDuoMatches, true)
                    .addField("Skor", currentDuoScore, true)
                message.channel.send(currentDuoEmbed); //Send duo season stats

                //Squad season stats
                let currentSquad = stats.current_duo;
                let currentSquadScore = currentSquad.score;
                let currentSquadMatches = currentSquad.matches;
                let currentSquadWins = currentSquad.wins;
                let currentSquadKills = currentSquad.kills;
                let currentSquadKd = currentSquad.kd;

                let currentSquadEmbed = new Discord.RichEmbed()
                    .setTitle(`## Fortnite Sezonu ${currentSeason} Squad Bilgileri ##`)
                    .setThumbnail(
                        "https://images.joinsquad.com/Logos/squadlogo_black_hires.png"
                    )
                    .setDescription(
                        `Sezon ${currentSeason} ${data.username} İçin Squad Bilgileri`
                    )
                    .setColor("#42b6f4")
                    .addField("Kazanmalar", currentSquadWins, true)
                    .addField("Öldürmeler", currentSquadKills, true)
                    .addField("K/D", currentSquadKd, true)
                    .addField("Oynadığı Oyunlar", currentSquadMatches, true)
                    .addField("Skor", currentSquadScore, true)
                message.channel.send(currentSquadEmbed); //Send squad stats
            }
        })
        .catch(e => {
            //Error handling
            //console.log(e);
            return message.channel.send(
                "Hata. Oyuncu bulunamadı doğru komudu kullandığınızdan emin olun: `lb!fortnite <oyuncu-ismi> [platform pc/xbl/psn] {tüm modlar/sezonlar}`.\nTüm zamanlar için `lb!fornite <oyuncu-ismi> [platform pc/xbl/psn]`\n\n**Least Army**"
            ); //Send error message
        });
};

module.exports.help = {
    name: "fortnite"
};