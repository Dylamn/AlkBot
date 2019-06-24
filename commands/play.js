const findAuthorVoiceChannel = require('../utils/findAuthorVocalChannel');
const ytdl = require('ytdl-core');

module.exports = class Play {

    static getVoiceChannels (message) {
        return message.guild.channels.filter((channel) => {
            return channel.type === "voice";
        });
    }

    static action (command, message) {
        let audio, isLink = command.link !== null;

        if (isLink) {
            audio = ytdl(command.link);
        } else {
            audio = Math.floor(Math.random() * 5 + 1);
        }

        let voiceChannel = findAuthorVoiceChannel(this.getVoiceChannels(message), message);

        voiceChannel.join()
            .then((connection) => {

                if (isLink) {
                    connection.playStream(audio).on('end', () => {
                       connection.disconnect();
                    });
                } else {
                    connection.playFile(`./assets/sounds/${audio}.mp3`).on('end', () => {
                        connection.disconnect();
                    });
                }
            }).catch(console.error);
    }
};