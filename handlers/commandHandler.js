const fs = require("fs")
const Command = require('../classes/CommandClass')

loadCommands = async(client) => {
    let commandsArray = [];

    await client.application.commands.fetch()
    fs.readdirSync("./commands").forEach(async file => {
        const commandFile = require(`../commands/${file}`);
        const commandClass = new commandFile()
        if (commandClass instanceof Command) {
            client.commands.set(commandClass.name, commandClass);
    
            commandsArray.push(commandClass.slash);
        }
    })
  
    client.application.commands.set(commandsArray)
    .then(() => {
        console.log(`${commandsArray.length} Commands have been loaded`);
    })
    .catch((e) => {
        console.error(`[HANDLER/COMMANDS] Error installing global slash commands: ${e}`);
    });
  }
  
  module.exports = loadCommands;