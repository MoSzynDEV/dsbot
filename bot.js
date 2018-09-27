const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";
const accept = require('./accept.js')
const cennik = require('./cennik.js');

var welcomemsg = "Witaj w Shady Grove! Najpierw zapoznaj się z kanalem #info, gdy już to zrobisz wpisz /nickname IMIĘ NAZWISKO - wpisz te z gry IC, nie rób sobie jaj i nie trać czasu pisząc przykładowo /nickname twoja stara, bo za to będą nagrody. W razie zmiany nickname'u zgłoś się do lidera.";

client.on('ready', () => {
    console.log(' Shady Grove 0.6.8 ')
    client.user.setUsername("Shady Grove");
    client.user.setStatus('dnd');
    client.user.setAvatar('https://i.imgur.com/ZhnoGYy.png');
    client.user.setActivity('egzekucje Kazuo Okano', {type: 'WATCHING'})
	;
});

client.on('guildMemberAdd', member => {

	member.addRole('490793921694269440')
	member.guild.channels.get('490798051221569537').send(`${member}` + ", " + welcomemsg); 

});

client.on('message', async message => {
if(message.content == "/skinpack") {
message.channel.send("SOON")
	
}});
client.on('message', async message => {
		if(message.content == "TO THE PLACE") {
message.channel.send("I BELONG")
			}});
client.on('message', async message => {			
			if(message.content == "WEST VIRGINIA") {
message.channel.send("MOUNTAIN MAMA")
				}});


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
	    message.member.addRole('480695839686262804', 'Zarejestrowano');
	    message.member.removeRole('490793921694269440', 'Zarejestrowano');
            console.log(message.author.username + args[0] + " " + args[1] + " " + args[2])
            message.member.setNickname(message.author.username + ' ' + '(' + args[1] + '_' + args[2] + ')')
            .then(console.log)
            .catch(console.error);
            break;
          }
				
        case '/purge':
			if (message.author.id == 186838922595270657 || message.author.id == 182538255550513153 || message.author.id == 140399385241452544 || message.author.id == 229018558875566080) {
				let messagecount = parseInt(args[1]);
				  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
				} else { message.channel.send('Nie masz uprawnień do wykonania tej czynności, mordo');}
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
