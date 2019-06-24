module.exports = (msg) => {
    const params = msg.content.slice(process.env.PREFIX.length).split(' ');
    let command = {
        type: params[0],
        link: null,
        args: []
    };

    for (let i = 1; i < params.length; i++) {
        if (params[i].startsWith("https://")) {
            command.link = params[i];
            continue;
        }
        command = {...command, args: [...command.args, params[i]]};
    }

    return command;
};
