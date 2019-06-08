/**
 * Find the voice channel of the author who send the message.
 *
 * @param voiceChannels
 * @param message
 * @returns VoiceChannel
 */
module.exports = function findAuthorVoiceChannel (voiceChannels, message) {
    return voiceChannels.find(channel => {
        return channel.members.find(guildMember => {
            return guildMember.user === message.author;
        })
    });
};