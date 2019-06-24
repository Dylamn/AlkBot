const whoCallMe = require('./whoCallMe');
const types = require('./constants/commandsTypes');
const { join } = require('path');

module.exports = function dispatcher (command, message) {
    switch (command.type) {
        case types.ALK: {
            message.reply('p*te')
                .catch(console.error); // mentions the nickname followed by a comma and the content

            return;
        }

        case types.TEST: {
            console.log(message.content);

            return;
        }

        case types.PLAY: {
            require(`./${command.type}`).action(command, message);
            // Play.action(message);
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author.username}`))
                .catch(console.error);

            return;
        }

        default: {
            // TODO: commands help menu
            console.log('Help menu will appear soon...');
        }
    }
};