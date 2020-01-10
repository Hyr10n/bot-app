const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const sinfo = new MessageEmbed()
    .setDescription(message.author.tag, message.author.avatarURL())
    .addField("Membre", message.guild.memberCount, true)
    .addField("Owner", message.guild.owner.user.tag, true)
    .setImage(message.guild.iconURL())
    .setTimestamp();
  message.channel.send(sinfo);
}
