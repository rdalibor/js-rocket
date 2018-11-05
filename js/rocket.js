var timer = null;
var coundownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	coundownNumber = 10;
	document.getElementById('countdown').innerHTML = coundownNumber;

	if (state == 2) {
		timer = setInterval(function () {
		coundownNumber -= 1;
		document.getElementById('countdown').innerHTML = coundownNumber;
		if (coundownNumber < 0) {
			changeState(3);
		}
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function() {
			var randomNumber = Math.round(Math.random()*10);
			console.log('randomNumber: ', randomNumber);
			//success
			if (randomNumber > 4) {
				changeState(4);
			} else {
				changeState(5); // oh no!
			}
		}, 2000)
	};
}