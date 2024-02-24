const fs = require("fs")

loadEvents = async(client) => {
    fs.readdirSync("./events").forEach(async file => {
        const event = require(`../events/${file}`);
  
        if (event.rest) {
          if (event.once)
            client.rest.once(event.name, (...args) =>
              event.execute(...args, client)
            );
          else
            client.rest.on(event.name, (...args) =>
              event.execute(...args, client)
            );
        } else {
          if (event.once)
            client.once(event.name, (...args) => event.execute(...args, client));
          else client.on(event.name, (...args) => event.execute(...args, client));
        }
        console.log(`"${event.name}" event loaded.`)
    })
  }
  
  module.exports = loadEvents;