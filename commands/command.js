module.exports = class Command {

    static match (message) {
        return false;
    }

    static action (message) {

    }

    static parse (message) {
        if (this.match(message)) {
            this.action(message);
            return true;
        }
        return false;
    }
};