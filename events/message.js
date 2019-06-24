const parser = require('../commands/commandsParser');
const msgParser = require('../utils/messageParser');

exports.handle = function (message) {
    const command = msgParser(message);
    console.log("emitted from message.js : \r\n", command);

    console.log(message.channel.permissionsFor(this.bot.user.id));

    if (message.channel.permissionsFor(this.bot.user.id)) {
        parser(command, message);
    } else {
        console.log("I don't have the permissions for.")
    }
};