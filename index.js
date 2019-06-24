require('dotenv').config(); // loads the environment variables that will be accessible from process.env
const Bot = require('./Bot');
const Discord = require('discord.js');
const bot = new Discord.Client();

const alkBot = new Bot(bot);

alkBot.start().then(r => console.log("AlkBot is ready !"))
    .catch(e => console.log(e));