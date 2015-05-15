var FortuneTeller = {
	position : null,
	answer   : null,
	battery  : 100,
	guess    : null,
	future   : [],
	answered : null
};


// questions[FortuneTeller.current_question];

// var riddles = ["question 1",
//                "question 2",
//                "question 3",
//                "question 4"
//                ];

// var answers  = ["e15",
//                 "e19",
//                 "e3",
//                 "e20"
//                 ];

var riddles = ["Tests are completed, prom is over and yearbooks are signed.You wear this on stage while leaving highschool behind.",
				        "Stuck in dealth I now float and haunt--come find me at any old bed and breakfast in Vermont.",
                "Usually in a box, wrapped up tight. You can open me up on your birthday night!",
                "At parties I am quite the thrill. Pull me and out my confetti will spill.",
                "Hold on to me to get the shot, waste the film you cannot. ",
                "Kim K. had one. Pamela P. did too. They filmed their sex on this and technically so could you...",
                "I am clear, useful and full of electricty. I pop over your head during moments of genius simplicity.",
                "I can give you cancer of the lung and throat. My tip burns hot, but I will try not to gloat.",
                "I am green and covered in different Presidents faces. Take a trip to Vegas and bet me on aces. ",
                "I am a capsule you can take when you are hurt or sad. I am here to make the pain better, if only just a tad.",
                "Filled with bullets and ready to rumble. My fingers' on the trigger and it definitly won't fumble.",
                "I am made from metal and have a sharp side. Usually in the hands of a murderer - you better hide.",
                "I am three different colors and full of pages. You can read me or write me. I've been around for ages.",
                "You sing into me and your audience roars. Just like Beyonce and Kanye your selling out tours.",
                "I hold paints on me and wait for your brush. In hopes that your painting will turn out colorful and lush.",
                "We print real news on paper folded in half. We are older and wiser then all of Buzzfeed's staff.",
                "I can be used to controll the XBOX, PS4 and other consoles. Just make sure you get up and exsercise so you don't get fantasy fat rolls.",
                "You win me when you are first in your craft. You win by being smart, fast, strong but most certainly not daft.",
                "You need a board and a body to ride this wave. Usually we are hot blondes in tight wetsuits. High tide and cut water is what we crave.",
                "You can find me in the bar. I'll be in the ice cold mug. Frothing at the top, take a cheers and a chug.",
                "I am filled with mama's milk and am here to keep the baby calm. But afterall I'm still just a substitute for the babies' real mom.",
                "Sometimes my people aren't very nice to foreigners which is quite the shame. Since tourism hotspot, the Eiffel Tower, is our claim to fame.",
                "I’m on a different continent but you with a little help from your friends you can take a Yellow Submarine to come see me.",
                "I am an Asian country full of culture and Hello Kitty. Come visit me in Tokyo it is my busiest city.",
                "While waiting for the craps table to clear you pull my lever and wait to hear. Will you walk away with jackpot or will five gold tokens disappear.",
                "We must save mother earth! Its time to go Green! Look for this symbol and and keep our earth clean.",
                "You can hear us from a mile away. You can contact us at 911. We are always here to help but if your the bad guy you better run.",
                "Sometimes you shape me into bangs, a bowl cut or even a mohawk. No matter how many inches you cut off its always quite a shock.",
                "I live in the Asia and am Orange, White and Black. Tony Montanta owned me in a movie once but eventually got the whack.",
                "I am found in nature, can be eaten, smoked and studied. I give mad halucinations and can even make your memories muddied.",
                "People say when I come out the crazies do as well. All I know for a fact is that the tides do indeed swell.",
                "You saw me on Sex & the City and in every divorcee hand. I am made with Gin or Vokda, your drunk wish is my comand.", 
                "I am greasy, cheesy and a triangual sin. Don't eat me or my peperoni if you want to stay thin.",
                "I am slippery, wet and sometime's in TopRamen form. If im not in the supermarket just check the nearest dorm.",
                "Circular, glazed and full of sprinkled goodness. Krispy Kreme is open 24 hours and for your health should be open less.",
                "It's your day of birth! What do you want to eat? Something fluffy, baked and sweat? Make sure its' got candles and will gice you love handles.",
                "What was once a fruit now gets mistaken for a butt. This emoji is plump, round and knows how to strut.",
                "What was once a fruit now gets mistaken for a penis. Guys will use it in their sexts and think they're genius.",
                "They are cute with their whiskers, floppy ears and noses. But they bark all day and eat your best roses.",
                "They all say Moo! Thats easy enough you shouldn't need another clue.",
                "You find us in the blue sea, swimming deep below. We have a big hole on our top, sit back and watch it blow.",
                "We live in the desert and can survive days without water. Our humps conserve fuel just incase it gets hotter.",
                "I grow in southern fields with other beautiful flowers. Im bright yellow and can get as tall as some towers.",
                "I am prickly and green, people don't like to touch. I am filled with water and like the heat very much.",
                "Sit below me to get the perfect island shade, grab one of my coconuts to drink or to trade.",
                "I'm yellow, have five points and in space I am free. I shoot through the sky faster then anyone can see.",
                "I could burn you worse then your morning cup of java. At any moment I could spread my hot lava.",
                "I come to your rescue when everything is wet. I will cover you from the rain so there is no need to fret.",
                "Each one of me is unique in its own special way. When we pile up, they cancel school and you get to sleigh.",
                "I am vast, seemingly never ending and there are many of me. I am deep, home to the all fishes and full of pee.",
                "After a rain I peek my head out, to see who is there. Count all of my colors, its a family affair!",
                "When you are near my eyes wince and my face starts to blush. Now it so obvious you are my crush.",
                "When you have a crush, you feel it everywhere. Hearts become your eyes and love fills the air.",
                "I am the recognizable sign for love and eqaulity. My supporters wear lots of tye dye and support pro-marajuana legality.",
                "I am a fiery latin dancer, a specialist in all the sexy moves. Before taking my dance class make sure your wife approves.",
                "Two ladies in love, together forever. Oh wait, you live in Mississippi...make that together for never.",
                "You get me done at a cheap salon, there is acetone, foreign whispers and arcylic press ons.",
                "It is your magical day, veil and all. When walking towards your future husband make sure not to fall.",
                "Magicians love me and rabits do not. I am tall black, sit on your head and prevent you from ever looking hot.",
                "In anticaption for summer you try to loose 10 pounds. You want to fit into me but giving up burgers is harder then it sounds.",
                "I live in a tube, can be bright red or pink. Roll me over your lips and shoot that hot guy a wink.",
                "After a nasty breakup this is how you feel. You hope they die and that one day you heal.",
                "You spend a shit ton and give me to the woman you love. Wrap me around her finger not the neck of a carrier dove.", 
                "Cute house and great yard - I am a typical suburban destination. With emphasis on a a husband excited by extramarital flirtation.",
                "I am the setting for Greys Anatomy and other shows just like it. Where apparently hot doctors hook up in every broom closet.", 
                "In a far off land, King Joffrey lived in me. He beat prostitutes and drank wine withthe help of Cersei.", 
                "Your dad used to force you to go camping in me. I am itchy, gross and orange and force you to pee behind trees.",
                "Magestic and tall, climbed by men and goat. I have a snowy top, so you might need a coat.", 
                "I was a gift from France, giant and green. I'm a lady of freedom and New Yorks queen.",
                "I have SkyMall and no leg room, I am a crowded air bus. Babies love to board me and then make a great fuss.", 
                "Tom Hanks needed me when he was Castaway, I can be sailed on lake, ocean or even in a bay.",
                "When you here this sound you know there is trouble. Bright reds and blues flash to get there in double",
                "Bright yellow, four wheels and on every street. I am popular in New York and smell like feet.", 
                "Hipsters love me and Seamless needs me. I sit on two wheels and can get pretty speedy."
                ];
                

var answers  = ["e1",
                "e2",
                "e3",
                "e4",
                "e5",
                "e6",
                "e7",
                "e8",
                "e9",
                "e10",
                "e11",
                "e12",
                "e13",
                "e14",
                "e15",
                "e16",
                "e17",
                "e18",
                "e19",
                "e20",
                "e21",
                "e22",
                "e23",
                "e24",
                "e25",
                "e26",
                "e27",
                "e28",
                "e29",
                "e30",
                "e31",
                "e32",
                "e33",
                "e34",
                "e35",
                "e36",
                "e37",
                "e38",
                "e39",
                "e40",
                "e41",
                "e42",
                "e43",
                "e44",
                "e45",
                "e46",
                "e47",
                "e48",
                "e49",
                "e50",
                "e51",
                "e52",
                "e53",
                "e54",
                "e74",
                "e75",
                "e76",
                "e77",
                "e78",
                "e80",
                "e81",
                "e82",
                "e83",
                "e84",
                "e85",
                "e87",
                "e88",
                "e89",
                "e91",
                "e92",
                "e94",
                "e95",
                "e96",
                "e97"
                ];

// var fortunes = ["You were a real nerd and graduate with top honors.",
// 		            "You are haunted my your Great Aunt Shelia.",
//                 "You get your frist robotic puppy for your 33rd birthday.",
//                 "You get blinded my a party popper on New Years Eve 2021.",
//                 "You will win 3 Oscars for film direction.",
//                 "Your homevideo went viral on Youtube.",
//                 "You invent the first Hovercar©",
//                 "You get Lung Cancer.",
//                 "You come into a great inheretance from your Grandmother.",
//                 "You enter a Utah Rehab center for perscription pill addiction."
//                  ] 


var selectedriddle = null;

$(".go-button").click(function() {

	if (FortuneTeller.answered == FortuneTeller.future.length || (FortuneTeller.answered == null && FortuneTeller.future.length == 0)) {
		FortuneTeller.position = Math.floor(Math.random()*riddles.length);
		var nextriddle = riddles[FortuneTeller.position];

		while(selectedriddle == nextriddle) {
			FortuneTeller.position = Math.floor(Math.random()*riddles.length);
			nextriddle = riddles[FortuneTeller.position];
		}

		FortuneTeller.future.push(FortuneTeller.position);

		increment_numpad('.lifecounter-numbers');
		increment_numpad('.dotcounter');

		selectedriddle = nextriddle;

		$(".riddle-holder").html(nextriddle);
  	}

});

// $(".go-button").click(function() {
//   $(".thirdtriangle").show();

// }


function increment_numpad(selector) {
	var num_pad    = $(selector).children(),
  	 current_pad = FortuneTeller.future.length - 1;

  $(num_pad[current_pad]).addClass('active');
}

$(".emojitoggle").click(function() {
	$(".emojiboard").toggleClass("hide");
	$(".lifecounter").toggleClass("hide");
});

$(".emojiboard img").click(function() {
	var text_message = $(".textms");

	FortuneTeller.guess = $(this).attr('id');

	if (text_message.children().length < 1) {
		$(".textms").append($(this).clone())
	}	
});

var correctAnswers = [];

$('.send').click(function() {
    if (FortuneTeller.position !== null) {
        if (answers[FortuneTeller.position] == FortuneTeller.guess) {
            $(".winalert").toggleClass("show");
            correctAnswers.push(FortuneTeller.position);

            correct_answer();
        } else {
            $(".losealert").toggleClass("show");
            wrong_answer();
        }
    
    }
     $('.close').click(function() {
     $(".losealert").removeClass("show");
     $(".winalert").removeClass("show");
     $(".finalfailmsg").removeClass("show");
   
 });
});



$(".winalert").click(function() {
  $('.go-button').trigger('click')
});

function wrong_answer() {
	FortuneTeller.battery = FortuneTeller.battery - 10;
	var batteryclass = 'battery' + FortuneTeller.battery;

  $('#batterylife').attr('class', '').addClass(batteryclass);
  $(".textms").html('');

  if (FortuneTeller.battery <= 0) {
    game_over();
  }
}

function game_over() {
  $('.wrapperover').fadeOut('slow');
  $('.lifecounter-numbers li').not('.active').addClass('skullemoji');
  
  if (game_over) {
    $(".finalfailmsg").toggleClass("show");
    document.body.style.backgroundColor = "#050505";
  }
}

function correct_answer() {
	if (FortuneTeller.answered == null) {
		FortuneTeller.answered = 1;
	} else {
		FortuneTeller.answered = FortuneTeller.answered + 1;
	}

	$(".emojiboard").toggleClass("hide");
  $(".textms").html('');
  $(".lifecounter").toggleClass("hide");

  
  if (FortuneTeller.answered == 9) {
  $(".finalfortunemsg").toggleClass("show");
}

}
$(".fortunenext").click(function() {
  $(".fortunenext").replaceWith($(".solvedfortune"));
  $(".solvedfortune").toggleClass("show")
  document.body.style.backgroundImage = "url('http://media.tumblr.com/7deffde8145226c9b6b6c84cf3d49692/tumblr_inline_nkwbmyYCQ91qmuq7e.gif')";




});


// $(".fortunenext").click(function() {
//   $(".solvedfortune").toggleClass("show"); 

//$(".solvedfortune").append(fortunes);

//localStorage.setItem("fortunes", FortuneTeller.answered);
  //   document.getElementById("result").innerHTML = localStorage.getItem(FortuneTeller.answered);


//   var selectedAnswer = Math.floor(Math.random()*3);
//   $(".answerdiv").html(myArray[selectedAnswer]);



// var answers = 

// document.getElementByClass('solvedfortune');

// function your_fortune() {
//   var answers = document.getElementByClass()
// }

// if ()

// when someone answers save id in a new array. when all lifecounter are answered randomly select one fortune from each id. 

	// change color / image of the life counter


// if (FortuneTeller.battery > 0) $('.lifecounter-numbers li').not('.active'){
//     congratz_game();
//   }
// }

// function congratz_game() {
//   $(".finalfortunemsg").toggleClass("show");
//   $(".world").toggleClass("show")
// }

//randomly select one future from var (emojiID)

//wrap entire page in wrapper to then allow to fade out
//once you get 0 battery bring you back to lifecounter 

  // $("lifecounter-numbers li").replaceWith(FortuneTeller.answered);
  // $('.lifecounter-numbers li').not('.active').toggleClass('finalfortune');


// if (batteryclass != ".battery0") {
//   $(".finalfortunemsg").toggleClass("show");

// }

// if (batteryclass == ".battery0") {
//   $(".finalfailmsg").toggleClass("show");
//   $(".topbar. bottombar" ).fadeOut( "slow", function();
//   $(num_pad[current_pad]).replaceWith(.skullemoji);
// }



// $('.send').click(function() {
//     if (FortuneTeller.position !== null) {
//         if (answers[FortuneTeller.position == FortuneTeller.guess]) {
//             $(".winalert").toggleClass("show");
                //if #batterylife is not .battery0 then show .finalfortunemsg (possibly confetti javascript?)
                //then if .fortunenext is pushed show .solvedfortune
                //if .again is pushed then redirect to "lifecounter.html" -- (right now is 'a href')
//         } else {
//             $(".losealert").toggleClass("show");
                //erase emoji guess. allow to guess again   
                //drain battery. go down a class? b100, b90 etc.
                //drain battery percentage. bp100, bp90 etc. 
                //do this until b0/bp0 and then $( *when ever you click the last send button (answer wrong) ).click(function() {
                    //$( "topbar","bottombar" ).fadeOut( "slow", function() {
                    //Animation complete.

                    //place(replace) skull emoji over remaining livecounters
                    //$( (*remaining)"lifecounter-numbers" ).replaceWith( "skullemoji" );

                    //$(".finalfailmsg").toggleClass("show");
                    //if .again is pushed then redirect to "lifecounter.html"-- (right now is 'a href')
//         }
//     }

//     }



//      $('.close').click(function() {
//      $(".losealert").removeClass("show");
//      $(".winalert").removeClass("show");
//  });
// });


//         } else {
//             $(".losealert").toggleClass("show");
//         }
//     }
//      $('.close').click(function() {
//      $(".losealert").removeClass("show");
//      $(".winalert").removeClass("show");


// <div clas="emoji" data-id="e15">
// 	<img src="emoji-e15.jpg" />
// </div>

// $(".emoji").click(function() {
// 	// add emoji to the message bar
// 	// $(".message-bar").html()

// 	// set FortuneTeller"s answer to that 
// 	// emoji"s value (unique ID)
// 	FortuneTeller.answer = $(this).data("id");
// });

// $(".send").function() {
// 	if (FortuneTeller.answers[FortuneTeller.position] == FortuneTeller.answer) {
// 		// then the user is correct
// 		// and they should proceed
// 	} else {
// 		// drain the battery
// 	}
// }