const { Client, MessageEmbed } = require("discord.js");
const client = new Client({ disableEveryone: true });
const { TOKEN, PREFIX } = require("./config");

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0) return;
  const args = msg.content
    .slice(PREFIX.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLocaleLowerCase();
  if (cmd === "sinfo") {
    const embed = new MessageEmbed()
      .setDescription(msg.author.tag, msg.author.avatarURL())
      .addField("Membre", msg.guild.memberCount, true)
      .addField("Owner", msg.guild.owner.user.tag, true)
      .setImage(msg.guild.iconURL())
      .setTimestamp();
    msg.channel.send(embed);
  }
});

client.on("guildMemberAdd", member => {
  member.send("salut à toi !");
});

client.login(TOKEN);

client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
