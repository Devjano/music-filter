 const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 4,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    message.reply(new MessageEmbed().setColor("BLACK").setTitle("**link bot**").setDescription("https://discord.com/api/oauth2/authorize?client_id=867208331659706379&permissions=0&scope=bot")
    .setFooter("Invite Bot", ""));

  }
}
