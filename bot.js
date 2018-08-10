const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";
const accept = require('./accept.js')
const cennik = require('./cennik.js');

var welcomemsg = "Witaj w The Junkyard (Złomowisko)! Aby wyświetlić powitalną (która jest obowiązkowa) wejdź na kanał tekstowy #informacyjna. Po przeczytaniu wpisz /nickname IMIĘ NAZWISKO - wpisz te z gry IC, nie rób sobie jaj i nie trać czasu pisząc przykładowo /nickname twoja stara, bo za to będą nagrody. W razie zmiany nickname'u zgłoś się do herszta/kapitana.";

client.on('ready', () => {
    console.log(' ZŁOM BUILD 0.6.7 ')
    client.user.setUsername("Stanisław");
    client.user.setStatus('dnd');
    client.user.setAvatar('https://i.imgur.com/0KJfEZy.png');
    client.user.setActivity('głosu ludu', {type: 'LISTENING'})
	;
});

client.on('guildMemberAdd', member => {

	member.addRole('329267485041754112')
	member.guild.channels.get('329266779069349888').send(`${member}` + ", " + welcomemsg); 

});

if(message.content == "COUNTY ROADS") {
message.channel.send("TAKE ME HOME")
}

client.on('message', async message => {

        let args = message.content.split(/ +/);
        switch (args[0]) {
                 case '/cena':
      if(message.channel.id == 444173672903868431)
          if (args[1] == 'walton' ) {
          message.channel.send('✅ Cena **Waltona** to **$'+cennik.cennik.Walton+'**');
          } else if (args[1] == 'waltonc') {
          message.channel.send('✅ Cena **Waltona Rat-Loadera** to **$'+cennik.cennik.WaltonC+'**');
          } else if (args[1] == 'waltonrc') {
          message.channel.send('✅ Cena **Waltona Rat-Loadera Classic** to **$'+cennik.cennik.WaltonRC+'**');
          } else if (args[1] == 'bobcat') {
	message.channel.send('✅ Cena **Bobcata** to **$'+cennik.cennik.Bobcat+'**');
          } else if (args[1] == 'sadler') {
	message.channel.send('✅ Cena **Sadlera** to **$'+cennik.cennik.Sadler+'**');
          } else if (args[1] == 'picador') {
	message.channel.send('✅ Cena **Picadora** to **$'+cennik.cennik.Picador+'**');
          } else if (args[1] == 'amfa') {
          message.channel.send('✅ Cena **amfy** to **$'+cennik.cennik.amfa+'**');
          } else { message.channel.send('❎ Nie znaleziono pojazdu spełniającego kryteria!'); }
      break;
			
      case '/nickname':
          if (args[1] !== 'undefined' ) {
	    message.member.addRole('328513641970139136', 'Zarejestrowano');
	    message.member.removeRole('329267485041754112', 'Zarejestrowano');
            console.log(message.author.username + args[0] + " " + args[1] + " " + args[2])
            message.member.setNickname(message.author.username + ' ' + '(' + args[1] + '_' + args[2] + ')')
            .then(console.log)
            .catch(console.error);
            break;
          }
				
        case '/chujkurwalatajacepierogi':
			if (message.author.id == 186838922595270657 || message.author.id == 182538255550513153 || message.author.id == 140399385241452544 || message.author.id == 229018558875566080) {
				let messagecount = parseInt(args[1]);
				  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
				} else { message.channel.send('Nie masz uprawnień');}
				break;
                
			case '/itaknikttegokurwanieuzyje':
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
