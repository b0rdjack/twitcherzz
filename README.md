<div align="center">
  <img src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png" alt="discord" width="250" height="250">
  <h1> Twitcherzz </h1>

  <p>Discord bot that handles tasks in the <b>SIO Gaming</b> server.</p>
</div>

## What is Twitcherzz ? 🤔

*Twitcherzz* is a Discord bot made to automate tasks in the *SIO Gaming* server.

This bot is free for everyone and always will be.

## How does it work ? 💡

When the administrator invites *Twitcherzz* on his server, the bot will run some configuration tasks and then send a message to indicate that it's ready on the first channel where it has the necessary permessions.

## Features ⚙️

* **Twitch automation :**
  * Administrator(s) can add Twitch streamers to the bot with the `$config` command.
  * When a streamer goes live, Twitcherzz will ping everyone and give the title + description of the stream.

* **Game Testing:**
  * The *SIO Gaming* often tests games, the bot gives the ability to the users to check the status of the tested games.
  * Administrator(s) have access to all CRUD (*Create Read Update Delete*) operations on the tested games.
  * Users can list the tested games: `$games`.
  * Users can get the status of a specific game: `$game nameOfTheGame`.

This list is ever-growing thanks to active development and our exceptional contributors. See a full list of documented commands by using the `$help` command.

## Requirements 📄

To use this bot in your own server you will only need *NodeJs*.

*Be sure that git is available in your system. More information [here](https://git-scm.com)*

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.15.4

    $ npm --version
    6.14.10

Check that your node and npm versions are not below the listed ones.
---

## Install 📥

    $ git clone https://github.com/b0rdjack/twitcherzz
    $ cd twitcherzz
    $ npm install

## Configure app 🔧

Rename the `.env.example` to `.env` and fill out the fields. If `.env.example` is nonexistent (hidden), create a text file named `.env` and copy the contents of [`.env.example`](https://raw.githubusercontent.com/kyb3r/modmail/master/.env.example) then modify the values.

## Running the project 🚀

    $ npm start

## Simple build for production 🔨

    $ npm build

## Contributing

Contributions to *Twitcherzz* are always welcome, whether it be improvements to the documentation or new functionality, please feel free to make the change. Check out our [contributing guidelines](https://github.com/kyb3r/modmail/blob/master/.github/CONTRIBUTING.md) before you get started.

## Beta Testing

Our [development](https://github.com/kyb3r/modmail/tree/development) branch is where most of our features are tested before public release. Be warned that there could be bugs in various commands so keep it away from any large servers you manage.

## Template

This README is inspired by the [Modmail bot repo](https://github.com/kyb3r/modmail).