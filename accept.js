const discord = require('discord.js');
const client = new discord.Client();

let accept = {};

    accept.acccept = (message, client) => {
	try {
        message.member.removeRole('443778477787840513');
        message.member.addRole('328513641970139136');
		
        message.author.send({
            "embed": {
              "title": "POWITALNA",
              "color": 6673261,
              "footer": {
                "text": "Miłej gry :)"
              },
              "fields": [
                {
                  "name": "**Sprawy organizacyjne**",
                  "value": "Za każdy sprzedany pojazd dostajecie 50% z marży z czego 20% idzie do waszego szefa IC a 30% zarobku do Was, jeśli sprzedajecie np. Sabre z marżą $8.000 to (30%) $2.400 wędruje do Was a (20%)$1.600 do kapitana. Za każdy spędzony czas na duty dostajecie $100 dniówki pod warunkiem że spędzicie na złomowisku minimum 30 minut służby. Wypłaty będą przyznawane w niedziele, każdy kapitan będzie miał swoich ludzi pod sobą i to on dostaje pieniądze na wypłaty i rozlicza Was z tego co zarobiliście. Co tydzień kapitan ma obowiązek rozliczyć wszystkich swoich pracowników i podać kwote jaką zarobiła jego ekipa. Obowiązkowo codziennie musi sprawdzać w grupie kto ile wbił duty i jeśli był na służbie 30 minut to zapisuje sobie dany dzień w notatniku."
                },
                {
                  "name": "Podsumowując...",
                  "value": "Podsumowując:Zarabiacie %50 z marży, lecz %30 idzie do Was a 20% do kapitana Za każdy dzień na służbie minimum 30 minut dostajecie $100 dniówki. Wypłaty będą przyznawane co tydzień w niedziele. Macie też możliwość wybrania pojazdu zamiast gotówki, rzecz jasna po dużo zaniżonej cenie. Będziecie mogli też brać zaliczki, ale to zależy od tego jak będzie to rozgrywał Wasz kapitan."
                },
                {
                  "name": "**[1] Statsiarstwo**",
                  "value": "Nie chce widzieć jak ktoś ma klienta na złomowisku, a przychodzi jakiś nachalny typek i każde spieprzać bo on chce zarobić. Za takie coś będziemy wyrzucać ze złomowiska! Siedzisz na złomowisku? To nie biegnij jak perszing do klienta, tylko poczekaj aż Sam przyjdzie i zagada, nie jest fajne patrzeć jak pięciu chłopa biegnie czym prędzej do faceta żeby tylko zarobić."
                },
                {
                  "name": "**[2] Szacunek do złomiarza**",
                  "value": "Jak sprzedajecie to nie mówicie do klienta proszę pana itp. itd. Nawijacie z nim luźną gadkę i jak taki facet zacznie Was wyzywać to macie prawo go spławić i podać nick żeby trafił na czarną listę, wtedy jak ktoś sprzeda coś tej osobie to dostaje wylot z The Junkyard. Chce żeby w tym miejscu było czuć respekt do ludzi którzy tam przesiadują, na samym wstępie ma wszystko wyglądać groźnie."
                },
                {
                  "name": "**[3] Rekrutacja nowych graczy**",
                  "value": "PITU PITU"
                },
                {
                  "name": "**CENNIK POJAZDÓW**",
                  "value": "Dostepny jest pod linkiem https://goo.gl/NSC1NL albo na chacie 'CENY' komendą /cena [auto]. Różne warianty pojazdu mają różne oznaczenia, **RL**-Rat Loader; **C**-Cabrio/klasyk;**CC**-Cabrio Klasyk. "
                }
              ]
            }
          })
   } catch (e) {
                  message.channel.send("Gotowe!");
              } finally {
		  message.delete();
                  message.channel.stopTyping(true);
              }
	  }
		
module.exports = accept;
