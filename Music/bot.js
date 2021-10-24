 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bot",
  aliases: ["b"],
  cooldown: 6,
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
   .setTitle(`**Info Ability**`)
   
    
    .addField("`my name`", `**Ability#9714**`, true)

    .addField("`My ID`",  `**867208331659706379**`, true)
    
    .addField( "`My Prefix` ",`**%**`,true)
    
    .addField("`Node.js Version`",  `**12**`, true)
    
    .addField("`Language Program`",  `**Java Script**`, true)
    
    .addField("`Discord.js `",  `**12.5.1**`, true)
    
    .addField( "`developer bot` ",`<@681553671364018196>`,true)
    
   
    
   
   
    .setDescription(`
\`ONLINE BOT\`
`)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
