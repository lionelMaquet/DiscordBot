// Pour lancer le projet, exécuter la commande : npm run devStart 

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
})

