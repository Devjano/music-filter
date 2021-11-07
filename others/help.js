const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 5,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Ability  Commands**`)

    .setDescription(` 
> **Music Command**
> \` %paly\` • \`%stop\` • \`%skip\` • \`%skipto\` • \`%volume \`
> \` %queue\` • \`%loop\` • \`%pause\` • \`%nowplaying \`
> \` %shuffle\` • \`%uptime\` • \`%search\` • \`%remove \`
> \` %radio\` • \`%filter\` • \`%lyrics\` • \`%resume\`
> **Info Command**
> \` %bot\` • \`%support\` • \`%invite\` • \`%help\` • \`%ping\`

> **[ \`invite\` ](https://discord.com/api/oauth2/authorize?client_id=867208331659706379&permissions=0&scope=bot)** 
> **[ \`support\` ](https://discord.gg/dTNKbPXw9Y)**                                                              
 `)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
