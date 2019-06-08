const Command = require('./command');
const findAuthorVoiceChannel = require('../utils/findAuthorVocalChannel');

module.exports = class Play extends Command {

    static getVoiceChannels (message) {
        return message.guild.channels.filter((channel) => {
            return channel.type === "voice";
        });
    }

    static action (message) {
        let voiceChannel = findAuthorVoiceChannel(this.getVoiceChannels(message), message);

        voiceChannel.join()
            .then((connection) => {
                connection.playFile("./sounds/Alk_promo.mp3").on('end', () => {
                    connection.disconnect();
                });
            }).catch(console.error);
    }
};