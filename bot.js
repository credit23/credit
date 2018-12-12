const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('-help');
  }
});

client.login('NTExOTM5NTQxNzkyMzI1NjM0.DvLwNw.Muin4KQTC6rezlhqnwQVXO5pOes');
