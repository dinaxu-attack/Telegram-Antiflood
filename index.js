const { Telegraf } = require("telegraf");
require('dotenv').config();
const token = process.env.BOT_TOKEN;
const client = new Telegraf(token);
const {Antiflood} = require('./functions/funcs')

console.log('Ready');

client.on("message", async message => {
    let af = Antiflood(message)
    if (af == true) {
        console.log("ANTI FLOOD")
    } else {
        message.reply("Simple anti flood")
    }
})

if (token == 'production') {
    client.telegram.setWebhook(token);
    client.startWebhook('/', null, 5000);
} else {
    client.startPolling()
}
