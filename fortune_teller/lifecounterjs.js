var riddles = ["I hold paints on me and wait for your brush. In hopes that your painting will turn out colorful and lush." ,
				"We print real news on paper folded in half. We are older and wiser then all of Buzzfeed's staff.",
				"I can be used to controll the XBOX, PS4 and other consoles. Just make sure you get up and exsercise so you don't get fantasy fat rolls. ",
				"You win me when you are first in your craft. You win by being smart, fast, strong but most certainly not daft. ",
				"You need a board and a body to ride this wave. Usually we are hot blondes in tight wetsuits. High tide and cut water is what we crave. ",
				"You can find me in the bar. I'll be in the ice cold mug. Frothing at the top,take a cheers and a chug. ",
				"I am filled with mama's milk and am here to keep the baby calm. But afterall I'm still just a substitute for the babies' real mom.",
				"Sometimes my people aren't very nice to foreigners which is quite the shame. Since tourism hotspot, the Eiffel Tower, is our claim to fame. ",
			    "I’m on a different continent but you with a little help from your friends you can take a Yellow Submarine to come see me.",
			    "I am an Asian country full of culture and Hello Kitty. Come visit me in Tokyo, it is my busiest city. ",
			    "While waiting for the craps table to clear you pull my lever and wait to hear. Will you walk away with jackpot or will five gold tokens disappear. ",
			    "We must save mother earth! Its time to go Green! Look for this symbol and and keep our earth clean. ",
			    "You can hear us from a mile away. You can contact us at 911. We are always here to help but if your the bad guy you better run. ",
			    "Sometimes you shape me into bangs, a bowl cut or even a mohawk. No matter how many inches you cut off its always quite a shock. ",
			    "I live in the Asia and am Orange, White and Black. Tony Montanta owned me in a movie once but eventually got the whack. ",
			    "I am found in nature, can be eaten, smoked and studied. I give mad halucinations and can even make your memories muddied. ",
			    "People say when I come out the crazies do as well. All I know for a fact is that the tides do indeed swell. ",
			    "You saw me on Sex & the City and in every divorcees' hand. I am made with Gin or Vokda, your drunk wish is my comand. "];


var selectedriddle = false;
$(".go-button").click(function() {
  
  var nextriddle = riddles[Math.floor(Math.random()*riddles.length)];
  
  while (selectedriddle == nextriddle) {
    nextriddle = riddles[Math.floor(Math.random()*riddles.length)];
  }
  
  selectedriddle = nextriddle;
  
  $(".riddle-holder").html(nextriddle);


  var newheight = (Math.floor(Math.random() * 100) + 100) + "px";

$(".line").css("height", newheight);
  
  
for (var increment = 0; increment < 100; increment++) {
}

});