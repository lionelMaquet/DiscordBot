// Pour lancer le projet, exécuter la commande : npm run devStart 
// Pour déployer : https://youtu.be/qv24S2L1N0k?t=1202

require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client

client.on('ready', () => {
    console.log('BlezBot est prêt !!!')
})

client.login(process.env.BOT_TOKEN)

let count = 0; 

client.on('message', msg => {
    if (msg.content === "!up"){
        count++;
        msg.reply(`${count}`)
    }

    else if (msg.content === "!down"){
        count--;
        msg.reply(`${count}`)
    }
    
})

