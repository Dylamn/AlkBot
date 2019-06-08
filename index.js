const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config');

console.log(config);

bot.login(config.token)
    .catch(console.error);

bot.on('ready', () => {
   bot.user.setActivity("P*te")
       .catch(console.error);
});

bot.on('message', (message) => {
    if (message.content === "!alk") {
        //message.channel.send('P*te');
        message.reply('p*te')
            .catch(console.error); // mentions the nickname followed by a comma and the content
    }
});
