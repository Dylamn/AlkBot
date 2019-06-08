const Command = require('./command');

module.exports = class whoCallMe extends Command {
    static match (message) {
        return message.content.split(' ').indexOf('alk') !== -1;
    }

    static action (message) {
        message.channel.send("Qui est la pute qui m'a appelé ?");
    }
};