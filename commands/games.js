const Discord = require("discord.js");

const handle = (msg) => {
  const { games } = require("../data/games.json");
  const gamesEmbed = new Discord.MessageEmbed()
    .setTitle("Liste des jeux testés")
    .addFields(games.map((game) => ({ name: game.title, value: game.status })));

  msg.reply(gamesEmbed);
};

exports.handle = handle;
