const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzk2MzM0NDgwNjI2OTQxOTUy.DSgAZA.z6QWkE4yG2OLGS0TbkSp9YzvXgA);
