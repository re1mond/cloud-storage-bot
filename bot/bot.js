const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('message', (ctx) => {
  ctx.reply('hi!');
});

module.exports = bot;
