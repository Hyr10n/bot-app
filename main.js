const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });
const { TOKEN, PREFIX } = require("./config");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLocaleLowerCase();
});

client.login(TOKEN);
