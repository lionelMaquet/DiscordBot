// Pour lancer le projet, exécuter la commande : npm run devStart 
// Pour déployer : https://youtu.be/qv24S2L1N0k?t=1202

require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client

client.on('ready', () => {
    console.log('BlezBot est prêt !!!')
})

client.login(process.env.BOT_TOKEN)

client.on('message', msg => {
    if (msg.content === "!horror"){
        msg.reply("https://www.gamesradar.com/best-horror-movies/")
    }

    else if (msg.content === "tlm"){
        for (let i = 0; i < 5; i++){
            msg.reply("salut")
        }
    }

    
})

