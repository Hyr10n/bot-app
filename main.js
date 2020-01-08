const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("pong!");
  if (msg.content === "everyone") msg.channel.send("@everyone, salut à tous !");
  if (msg.content === "noteveryone") msg.channel.send("@everyone (noteveryone), salut à tous !");

});



client.login("NjY0NDY0OTU4MjYzOTE4NjEy.XhXdnQ.5Cg5Zn0zaQI_Pl8BnDeXwTUNjDU");
