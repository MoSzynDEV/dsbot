const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";
const cennik = require("./cennik.js");


client.on('ready', () => {
    console.log(' PLEBS BUILD 10 ')
    client.user.setUsername("PIRAT");
    client.user.setStatus('dnd');
    client.user.setActivity('szanty', {type: 'LISTENING'});
});


client.on('message', async message => {

        let args = message.content.toLowerCase().split(/ +/);
        switch (args[0]) {
            case '/c':
                if (args[1] == 'meta') {
                message.channel.send('✔️ Cena **mety** to **$'+cennik.cennik.meta+'**');
                } else if (args[1] == 'koka') {
                message.channel.send('✔️ Cena **koki** to **$'+cennik.cennik.koka+'**');
                } else if (args[1] == 'hera') {
                message.channel.send('✔️ Cena **hery** to **$'+cennik.cennik.hera+'**');
                } else if (args[1] == 'amfa') {
                message.channel.send('✔️ Cena **amfy** to **$'+cennik.cennik.amfa+'**');
                } else { message.channel.send('❌ Takie narkotyki nie istniejom baranie.'); }
            break;
        }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); 

//No moge
