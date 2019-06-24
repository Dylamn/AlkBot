module.exports = class whoCallMe {
    static match (message) {
        return message.content.split(' ').indexOf('alk') !== -1;
    }

    static action (message) {
        message.channel.send("Qui est la pute qui m'a appelé ?");
    }

    static parse (message) {
        if (this.match(message)) {
            this.action(message);
            return true;
        }
        return false;
    }
};