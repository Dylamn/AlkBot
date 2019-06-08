const Command = require('./command');
const findAuthorVoiceChannel = require('../utils/findAuthorVocalChannel');

module.exports = class Play extends Command {

    static getVoiceChannels (message) {
        return message.guild.channels.filter((channel) => {
            return channel.type === "voice";
        });
    }

    static action (message) {
        const file = Math.floor(Math.random() * 5 + 1);
        let voiceChannel = findAuthorVoiceChannel(this.getVoiceChannels(message), message);

        voiceChannel.join()
            .then((connection) => {
                connection.playFile(`./assets/sounds/${file}.mp3`).on('end', () => {
                    connection.disconnect();
                });
            }).catch(console.error);
    }
};