const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";
const cennik = require("./cennik.js");


client.on('ready', () => {
    console.log(' PLEBS BUILD 9 ')
    client.user.setUsername("PIRAT");
    client.user.setStatus('dnd');
    client.user.setActivity('szanty', {type: 'LISTENING'});
});


client.on('message', async message => {

        let args = message.content.toLowerCase().split(/ +/);
        switch (args[0]) {
            case '/c':
                for (i in cennik.cennik) {
                if (args[1] == i) {
            message.channel.send(`Cena ${args[1]} to ${cennik.cennik.i}`);
                }
                }
            break;
        }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); 

//No moge
