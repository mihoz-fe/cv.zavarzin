function puzzles(){

$('#go').on('click', function() {
	$('.puzzles').toggleClass('open');
	$('#go').toggleClass('hide');
});

var score = 0;

function askQuestion(textBoxId, answer) {
	var userAnswer = document.getElementById(textBoxId).value;
		userAnswer = userAnswer.toLowerCase()
	if (userAnswer == answer) {
		++score;
	} 
	document.getElementById(textBoxId).value = '';
};
		
function playPuzzle() {
	askQuestion('userAnswer1', 'шапка');
	askQuestion('userAnswer2', 'волосы');
	askQuestion('userAnswer3', 'дорога');
	$('.puzzles').removeClass('open');
	$('#correctAnswers').text(score);
	$('.count').toggleClass('open');
	score = 0;	
};

$('#end').on('click', function() {
	$('.count').removeClass('open');
	$('#go').removeClass('hide');
});
		
$('#answer').on('click', playPuzzle);
}
