const whoCallMe = require('./whoCallMe');
const Play = require('./play');
const types = require('./constants/commandsTypes');

module.exports = function dispatcher (message) {
    switch (message.content) {
        case types.ALK: {
            message.reply('p*te')
                .catch(console.error); // mentions the nickname followed by a comma and the content

            return;
        }

        case types.ALK_PLAY: {
            Play.action(message);
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author.username}`))
                .catch(console.error);

            return;
        }

        default: {
            whoCallMe.parse(message);
        }
    }
};