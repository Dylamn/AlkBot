module.exports = require('fs').readdirSync(__dirname)
    .filter(f => f !== "index.js" || "commandsParser.js" && f.includes('.'))
    .map(f => f.split('.')[0]);
