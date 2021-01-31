const Discord = require("discord.js");

/**
 * Returns the state of a game
 * Example: $game Overwatch -> Approuvé
 * @param {*} msg
 * @param {*} param
 */
const handle = (msg, param) => {
  const { games } = require("../data/games.json");
  const game = games.find((g) => g.title === param[0]);
  if (game) {
    const gameEmbed = new Discord.MessageEmbed()
      .setTitle(game.title)
      .setDescription(`État: ${game.status}`);

    msg.reply(gameEmbed);
  } else {
    msg.reply("Le jeu spécifié n'existe pas !");
  }
};

exports.handle = handle;
