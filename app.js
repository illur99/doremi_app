let myKeys = document.querySelectorAll('.key');


for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function () {
		
		playSnd(myKeys[x].innerHTML.toLowerCase());

    })
}

function playSnd(key) {
	switch (key) {
	case 'c':
			var snd = new Audio('do.mp3');
			snd.play();
			break;
	case 'd':
			var snd = new Audio('re.mp3');
			snd.play();
			break;
	case 'e':
			var snd = new Audio('mi.mp3');
			snd.play();
			break;
	case 'f':
			var snd = new Audio('doremi/fa.mp3');
			snd.play();
			break;
		case 'g':
			var snd = new Audio('sol.mp3');
			snd.play();
			break;
		case 'a':
			var snd = new Audio('la.mp3');
			snd.play();
			break;
	case 'b':
			var snd = new Audio('ti.mp3');
			snd.play();
			break;
		case 'k':
			var snd = new Audio('doh.mp3');
			snd.play();
			break;
		default:
			console.log(key);
	}
}










