function guess() {
	alert('working');

function playGuess() {
	var answer = parseInt(Math.random() * 100);
	alert('Wrong-working');

	$('#correctAnswer').text('Ввдите целое число');
	$('#start').text(answer);

		function attempt(textBoxId) {

			var usersNumber = document.getElementById(textBoxId).value;
			// usersNumber = parseInt(usersNumber);

			if (usersNumber == 'q') {
				$('#wrongAnswer').text('приходите ещё');
				// break;
			} 
			// else if (usersNumber > answer) {
			// 	$('#wrongAnswer').text('много');
			// } else if (usersNumber < answer) {
			// 	$('#wrongAnswer').text('мало');
			// }
			// while(true) {
			// 	if (usersNumber < answer) {
			// 		$('#wrongAnswer').text('Мало');
			// 	} else if (usersNumber > answer) {
			// 		$('#wrongAnswer').text('много');
			// 	} else if (usersNumber == answer) {
			// 		$('#correctAnswer').text('Ура это победа!!!');
			// 		break;
			// 	} 
			// }
			document.getElementById(textBoxId).value = '';
		};

		function playing() {
			attempt('userAnswer');
		};
		$('#sendnumder').on('click', playing);
	};

	$('#start').on('click', playGuess);
	}
