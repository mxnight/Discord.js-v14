module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    
    if (!command) {
      return interaction.reply({content: "This command is outdated.", ephemeral: true});
    }

    if (command.dev_only && !client.config.developers.includes(interaction.user.id)) { 
      return interaction.reply({content: "No access!", ephemeral: true});
    }

    command.execute(interaction, client).catch((e) => {
        console.log(`[INTERACTION ERROR]: ${e}`)
        if (!interaction.replied) return interaction.reply({content: "Error occured while executing this command!", ephemeral: true});
    })
  }
};