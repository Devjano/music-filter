const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "support",
  cooldown: 5,
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setDescription(` 
\`link server\`
**[ support ](https://discord.gg/dTNKbPXw9Y)**   
 `)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
