require("dotenv").config();
const token = process.env.DISCORD_TOKEN;

const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, commands, error_command } = require("./config.json");

client.on("ready", () => {
  const { getAccessToken } = require("./services/twitch_api.js");
  getAccessToken();
  const firstGuild = client.guilds.cache.first();
  const firstChannel = firstGuild.channels.cache.find(
    (channel) =>
      channel.type == "text" &&
      channel.permissionsFor(firstGuild.member(client.user)).has("SEND_MESSAGES")
  );

  firstChannel.send("Twitcherzz prêt à vous servir 👮");
});

client.on("message", (msg) => {
  if (msg.content.startsWith(prefix)) {
    // Seperate parameters and command
    msg_arr = msg.content.split(" ");
    // Get the command
    msg.content = msg_arr[0].substring(1);
    // If there's parameters then remove the main command
    msg_arr.length > 1 ? msg_arr.shift() : [];
    // Check if command is valid
    let cmd = commands.find((command) => command.name === msg.content);
    if (cmd) {
      // Import the handle function of the corresponding command
      const { handle } = require(`./commands/${cmd.name}.js`);
      // Execute command
      handle(msg, msg_arr);
    } else {
      msg.reply(error_command);
    }
  }
});

client.login(token);
