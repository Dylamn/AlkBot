const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config');
const commandsDispatcher = require('./commands/commandsDispatcher');

// Log the bot
bot.login(config.token)
    .catch(console.error);

bot.on('ready', () => {
   bot.user.setActivity("P*te")
       .catch(console.error);
});

bot.on('message', (message) => {
    commandsDispatcher(message);
});
