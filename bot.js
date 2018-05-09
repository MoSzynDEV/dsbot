const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";
const cennik = require("./cennik.js");


client.on('ready', () => {
    console.log(' PLEBS BUILD 1.0 ')
    client.user.setUsername("PIRAT");
    client.user.setStatus('dnd');
    client.user.setActivity('szanty pirackie', {type: 'LISTENING'});
});


client.on('message', async message => {

        let args = message.content.toLowerCase().split(/ +/);
        switch (args[0]) {
            case '/cena':
                if (args[1] == 'meta') {
                message.channel.send('✅ Cena **mety** to **$'+cennik.cennik.meta+'**');
                } else if (args[1] == 'koka') {
                message.channel.send('✅ Cena **koki** to **$'+cennik.cennik.koka+'**');
                } else if (args[1] == 'hera') {
                message.channel.send('✅ Cena **hery** to **$'+cennik.cennik.hera+'**');
                } else if (args[1] == 'amfa') {
                message.channel.send('✅ Cena **amfy** to **$'+cennik.cennik.amfa+'**');
                } else { message.channel.send('❎ Nie znaleziono pojazdu spełniającego kryteria!'); }
            break;
                
        case '/purge':
			if (message.author.id == 186838922595270657 || message.author.id == 182538255550513153 || message.author.id == 140399385241452544 || message.author.id == 229018558875566080) {
				let messagecount = parseInt(args[1]);
				  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
				} else { message.channel.send('Nie masz uprawnień');}
				break;
                
			case '/rozumiem':
				if (message.channel.id == 433033069147062272) {
				accept.acccept(message, client);
				}
				break;
			// case 'xd':
			// message.channel.send({embed: {
			// 	"title": "Dwie zasady, które musisz poznać, zanim zaczniesz korzystać z innych kanałów. Tutaj będą za to lecieć dwa razy większe kary niż miałoby to miejsce normalnie.",
			// 	"footer": {
			// 		"text": 'Jeżeli to zrozumiałeś, możesz wpisać na czacie poniżej "Zrozumiałem".'
			// 	  },
			// 	  "fields": [
			// 		{
			// 		  "name": "Pierwsza",
			// 		  "value": "Zakaz robienia jakiegokolwiek MG.",
			// 		  "inline": true
			// 		},
			// 		{
			// 			"name": "Druga",
			// 			"value": "Zakaz odwalania.",
			// 			"inline": true
			// 		},
			// 	  ],
			// 	"color": 16711709,
			//   }});
			//   break;
        }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); 

//No moge
