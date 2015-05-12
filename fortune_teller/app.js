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
                "I am a capsule you can take when you are hurt or sad. I am here to make the pain better, if only just a tad."
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
                "e10"
                ];

var e1 = ['You were a real nerd and graduate with top honors.',
		      'You barely graduate and have to take summer school.',
		      'You trip and fall at your graduation.'
		 ];

var e2 = ['You are haunted my your Great Aunt Shelia.',
          'You join the Ghostbusters tv show.',
          'A ghost possessed your home until you move.'
         ];

var e3 = ['You get your frist robotic puppy for your 33rd birthday.',
          'You convert, become a Jehovahs Witness and no longer celebrate birthdays or holidays.',
          'Your embarassing Amazon Wishlist leaks online.'
         ];

var e4 = ['You get blinded my a party popper on New Years Eve 2021.',
          'You get a job at a confetti factory.',
          'You will go to Vegas and develop a partying problem.'
         ];

var e5 = ['You will win 3 Oscars for film direction.',
          'You date an actor who gives you Herpies.',
          'You will work at Venus Blockbuster.'
         ];

var e6 = ['Your homevideo went viral on Youtube.',
          'All of your childhood VHSs were destroyed in a freak flood.',
          'You tape your bestfriends homebirth.'
         ];

var e7 = ['You invent the first Hovercar©',
          'You have a freak lightbuld accident.',
          'You are decide to live off the grid in a RV for 5 years.'
         ];

var e8 = ['You get Lung Cancer.',
          'You become the Millionaire CEO of Marlboro.',
          'You will date a hot, dangerous, rock n roller smoker.'
         ];

var e9 = ['You come into a great inheretance from your Grandmother.',
          'You serve 20 years in prison for embezzlement.',
          'You win the $217 New Jersey Lottery.'
         ];

var e10 = ['You enter a Utah Rehab center for perscription pill addiction.',
          'You become a Pharmacist at CVS.',
          'You become the Brand Designer for Advils new drug.'
         ];


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
	var num_pad     = $(selector).children(),
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

$('.send').click(function() {
    if (FortuneTeller.position !== null) {
        if (answers[FortuneTeller.position == FortuneTeller.guess]) {
            $(".winalert").toggleClass("show");
        } else {
            $(".losealert").toggleClass("show");
        }
    }
     $('.close').click(function() {
     $(".losealert").removeClass("show");
     $(".winalert").removeClass("show");
 });
});


// $('.send').click(function() {
// 	if (FortuneTeller.position !== null) {
// 		if (answers[FortuneTeller.position == FortuneTeller.guess]) {
// 			alert('you win!');
// 		} else {
// 			wrong_answer(); 
// 		}
// 	}
// });

function wrong_answer() {
	FortuneTeller.battery = FortuneTeller.battery - 10;
	var batteryclass = 'battery' + FortuneTeller.battery

	$('#batterylife').attr('class', '').addClass(batteryclass);
	$(".textms").html('');
}

function correct_answer() {
	if (FortuneTeller.answered == null) {
		FortuneTeller.answered = 1;
	} else {
		FortuneTeller.answered = FortuneTeller.answered + 1;
	}

	$(".emojiboard").toggleClass("hide");

	// change color / image of the life counter
}




// $('.send').click(function() {
//     if (FortuneTeller.position !== null) {
//         if (answers[FortuneTeller.position == FortuneTeller.guess]) {
//             $(".winalert").toggleClass("show");
                //erase emoji guess 
                //continue
                //if #batterylife is not .b0 then show .finalfortunemsg (possibly confetti javascript?)
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