const { PermissionFlagsBits } = require("discord.js");
const Command = require('../classes/CommandClass');

class Ping extends Command {
    name = "ping"
    description = "replies with pong"
    slash_param = []

    slash = {
        name: this.name,
        description: this.description,
        options: this.slash_param,
        default_member_permissions: PermissionFlagsBits.Administrator,
    };

    constructor() {
        super();
    }

    execute = async (interaction, client) => {
        return interaction.reply("Pong!")
    }
}

module.exports = Ping;