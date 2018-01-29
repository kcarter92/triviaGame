var incorrectAnswers = 0;
var correctAnswers = 0;
var noAnswers = 0;
var doneButton = false;



window.onload = function(){
	$("#questions").hide();
	$("#results").hide();
	document.getElementById('timeRemaining').innerHTML = 0 + ":" + 32;
};

$('#startBtn').click(function () {
	timer();
	if (doneButton = true) {
		$("#questions").hide();
		endGame();
	}
	else if (timer = 0) {
		$("#questions").hide();
		endGame();
	}
});
//Why does it take two seconds for my questions to show??
function timer(){
	$('#questions').show();
	var presentTime = document.getElementById('timeRemaining').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond((timeArray[1] - 1));
	  if(s==59){m=m-1}		  
	  document.getElementById('timeRemaining').innerHTML =
	    m + ":" + s;
	  setTimeout(timer, 1000);
};

function checkSecond(sec) {
	  if (sec < 10 && sec >= 0) {sec = "0" + sec};
	  if (sec < 0) {sec = "59"};
	  return sec;
};

//Able to answer questions but can't get a submitted answer
function endGame() {
	var answers = {q1: 'c', q2: 'a', q3: 'b', q4: 'b', q5: 'c'};

	$('#doneBtn').click(function(e) {
//Timer does not stop!
		$(timer).stop();
	    $.each(answers, function(question, answer) {
	        if($('input:radio[name="' + question + '"]:checked').val() == answer)
	            correctAnswers++;
	        else
	            incorrectAnswers++;
	    });
	    e.preventDefault();
	})
//How do I get the results to appear.
	return correctAnswers && incorrectAnswers
	correctAnswers.append('#results');
	incorrectAnswers.append('#results');
};
