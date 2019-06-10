const welcomeMessages = ["Lèche mon cul","T'es qu'une pute","Pupupupute","Croustipute"] ;
module.exports = function welcome (GuildMember) {
   const message = Math.floor(Math.random() * 3 + 0);
   GuildMember.sendMessage(welcomeMessages[message]);
}