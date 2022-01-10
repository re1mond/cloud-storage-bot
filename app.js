const express = require('express');
const bot = require('./bot/bot');

const app = express();

app.listen(process.env.PORT, () => {
  bot.launch();
  console.log(`Server started on port ${process.env.PORT}`);
});

module.exports = app;
