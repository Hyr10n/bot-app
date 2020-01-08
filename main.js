const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });
const { TOKEN, PREFIX } = require("./config");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.reply("Pong!");
});

client.login(TOKEN);
