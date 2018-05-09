const discord = require('discord.js');
const client = new discord.Client();

let accept = {};

    accept.acccept = (message, client) => {
	try {
        message.member.removeRole('443778477787840513');

        message.author.send({
            "embed": {
              "title": "POWITALNA",
              "color": 6673261,
              "footer": {
                "text": "Miłej gry :)"
              },
              "fields": [
                {
                  "name": "1",
                  "value": "Za każdy sprzedany pojazd dostajecie 50% z marży z czego 20% idzie do waszego szefa IC a 30% zarobku do Was, jeśli sprzedajecie np. Sabre z marżą $8.000 to (30%) $2.400 wędruje do Was a (20%)$1.600 do kapitana. Za każdy spędzony czas na duty dostajecie $100 dniówki pod warunkiem że spędzicie na złomowisku minimum 30 minut służby. 
Wypłaty będą przyznawane w niedziele, każdy kapitan będzie miał swoich ludzi pod sobą i to on dostaje pieniądze na wypłaty i rozlicza Was z tego co zarobiliście. Co tydzień kapitan ma obowiązek rozliczyć wszystkich swoich pracowników i podać kwote jaką zarobiła jego ekipa. Obowiązkowo codziennie musi sprawdzać w grupie kto ile wbił duty i jeśli był na służbie 30 minut to zapisuje sobie dany dzień w notatniku."
                },
                {
                  "name": "2",
                  "value": "PITU PITU"
                },
                {
                  "name": "3",
                  "value": "PITU PITU"
                }
              ]
            }
          });
          const emojiWporzo = message.guild.emojis.find('name', 'wporzo');
          const logi = client.channels.find("id", '433669387677990928')
          logi.send(`@here Dołączył do nas <@${message.author.id}>`);

        } catch (e) {
            message.channel.send("error!");
        } finally {
			message.delete();
            message.channel.stopTyping(true);
        }
    
    }
    accept.dodawanie = (message, args, client) => {
        try {

            if (args[1] == 'inter' && args[2] == 'cinas') {
                message.channel.send('Wynik dodawania to: klimat');
            } else {


            if (!isNaN(args[1]) && !isNaN(args[2])) {
            message.channel.send('Wynik dodawania to: ' + (parseInt(args[1]) + parseInt(args[2])));
        } else {message.channel.send('co ty kurwa chcesz litery dodawac baranie?');}}
            } catch (e) {
                message.channel.send("error!");
            } finally {
                message.channel.stopTyping(true);
            }
        
        }

        accept.narko = (message, args, client) => {
          try {
		  
      if (args[1] == "corner") {

		      		message.author.send({
                "embed": {
                  "description": "**Ceny sprzedaży na cornerze:**",
                  "color": 9040954,
                  "fields": [
                    {
                      "name": "Marihuana",
                      "value": "$80",
                      "inline": true
                    },
                    {
                      "name": "Haszysz",
                      "value": "$90",
                      "inline": true
                    },
                    {
                      "name": "LSD",
                      "value": "$75",
                      "inline": true
                    },
                    {
                      "name": "Meta",
                      "value": "$230",
                      "inline": true
                    },
                    {
                      "name": "Heroina",
                      "value": "$105",
                      "inline": true
                    },
                    {
                      "name": "Amfa",
                      "value": "$60",
                      "inline": true
                    },
                    {
                      "name": "Kokaina",
                      "value": "$280",
                      "inline": true
                    },
                    {
                      "name": "Crack",
                      "value": "$110",
                      "inline": true
                    },
                    {
                      "name": "Razem",
                      "value": "$1030",
                      "inline": true
                    }
                  ]
                }
              })
      		} else if (args[1] == "zarobek") {
			if (message.author.id == 186724346675462144) {
		if (args[2] == 1) {
                  var word = "pakiet"
                } else if (args[2] > 1 && args[2] <= 4) { var word = "pakiety" } else { var word = "pakietów" }
			
			   message.author.send({
			  "embed": {
			  "title": `Za ${args[2]} ${word} zarobisz $` + (parseInt(args[2]) * 85),
			  "color": 9040954
			  }
			})
			} else { 			   message.author.send({
			  "embed": {
			  "title": "Nie jesteś vardenem",
			  "color": 16711680
			  }
			})
			       }
              } else {
		      
		if (isNaN(args[1])) { message.author.send('podaj liczbe'); } else {
                               
                if (args[1] == 1) {
                  var word = "pakiet"
                } else { var word = "pakietów" }

                message.author.send({
			  "embed": {
			  "title": `Cena ${args[1]} ${word} to $` + (parseInt(args[1]) * 400),
			  "color": 9040954
			  }
			})
	      }
      }
              } catch (e) {
                  message.channel.send("error!");
              } finally {
		  message.delete();
                  message.channel.stopTyping(true);
              }
	  }

module.exports = accept;
