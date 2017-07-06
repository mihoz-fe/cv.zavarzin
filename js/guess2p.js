$(document).ready(function () {

function playGuess2p() {
	var answer = parseInt(Math.random() * 100),
			playerNum = 1;

		while(true) {
			var userAnswer = prompt('Ходит игрок' + playerNum + '. Введите число от 0 до 100, для выхода нажмите q');
			if (userAnswer == 'q') {
				break;
			}
			userAnswer = parseInt(userAnswer)

			if (userAnswer > answer) {
				alert('Ваш ответ великоват. Переход хода.');
			} else if (userAnswer < answer) {
				alert('Ваш ответ маловат. Переход хода.');
			} else if (userAnswer == answer) {
				alert('Правильно! Поздравляю, игрок ' + playerNum + '!');
				break;
			} else {
				alert('Необходимо ввести число');
			}

			if (playerNum == 1) {
				playerNum = 2;
			} else {
				playerNum = 1;
			}
		}
	}

	$('#go').on('click', playGuess2p);
});
