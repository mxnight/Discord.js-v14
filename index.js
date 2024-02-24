const {Client, GatewayIntentBits, Collection} = require("discord.js");

const {config} = require("dotenv")
const cfg = require("./config")
const eventHandler = require("./handlers/eventHandler");
const commandHandler = require("./handlers/commandHandler");

config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
    ]
})
client.commands = new Collection()
client.config = cfg

client.login(process.env.TOKEN).then(async () => {
    commandHandler(client)
    eventHandler(client)
})

client.on('error', console.error)
client.on('warn', console.error)
process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)