const { join } = require('path');

class Bot {
    constructor (bot) {
        this.bot = bot;
        this.cmds = [];
        this.start = this.start.bind(this);
    }

    /**
     * starts the bot and its commands.
     *
     * @returns {Promise<void>}
     */
    async start () {
        // Log the bot
        await this.bot.login(process.env.BOT_TOKEN)
            .catch(console.error);

        // When the bot is ready, set the activity
        await this.bot.on('ready', () => {
            this.bot.user.setActivity("P*te")
                .catch(console.error);
        });

        await this.loadCommands();

        // The "events" constant will contain all types of events managed by the bot within an array
        const events = require(join(__dirname, "events"));

        for (const event of events) {
            this.bot.on(event, require(`./events/${event}`).handle.bind(this));
        }
    }

    async loadCommands () {
        const commands = require(join(__dirname, 'commands'));

        for (const command of commands) {
            this.cmds.push(command);
        }
    }
}

module.exports = Bot;
