const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";
const cennik = require("./cennik.js");


client.on('ready', () => {
    console.log(' ZŁOM BUILD 1.0 ')
    client.user.setUsername("Stanisław");
    client.user.setStatus('dnd');
    client.user.setActivity('się mądrych ludzi', {type: 'LISTENING'});
});

client.on('guildMemberAdd', member => {

	member.addRole('443778477787840513')

});

client.on('message', async message => {

        let args = message.content.toLowerCase().split(/ +/);
        switch (args[0]) {
            case '/cena':
                if (args[1] == 'walton' ) {
                message.channel.send('✅ Cena **Waltona** to **$'+cennik.cennik.Walton+'**');
                } else if (args[1] == 'waltonc') {
                message.channel.send('✅ Cena **Waltona Rat-Loadera** to **$'+cennik.cennik.WaltonC+'**');
                } else if (args[1] == 'waltonrc') {
                message.channel.send('✅ Cena **Waltona Rat-Loadera Classic** to **$'+cennik.cennik.WaltonRC+'**');
                } else if (args[1] == 'bobcat') {
		message.channel.send('✅ Cena **Bobcata** to **$'+cennik.cennik.Bobcat+'**');
                } else if (args[1] == 'amfa') {
		message.channel.send('✅ Cena **Sadlera** to **$'+cennik.cennik.Sadler+'**');
                } else if (args[1] == 'amfa') {
		message.channel.send('✅ Cena **Picadora** to **$'+cennik.cennik.Picador+'**');
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
				if (message.channel.id == 443778350704492557) {
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
