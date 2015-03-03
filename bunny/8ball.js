$(document).ready(function() {
    // magic 8 ball logic here
  $('#magic-eight-ball').submit(function(e){
  e.preventDefault();

  
  var answers = ["I was wondering the same thing.","Sorry, I wasn't paying attention. Please try again.", "Absolutely!","Why would you ask that?","Hmm, I was going to say yes, but then I thought no. How about maybe?","I think we both know the answer to that.","That is a great question! I'm so blown away, I think I need to be alone.", "Um, yes. Can I ask some questions now?","No!!!!","On a scale from 1 to 10, I'd have to go with zero.","If that's what you want.","The real question is why are you asking me?"];


var answer = answers[Math.floor(Math.random()*answers.length)];
  
$('#ballAnswer').text(answer).animate('slow');
});
});                                

