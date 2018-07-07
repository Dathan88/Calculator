const display = document.getElementById('display');
const subDisplay = document.getElementById('subDisplay');
const myOp = document.getElementById('signs');
const myNumber = document.getElementById('number');
var x;
var signCount = 0;
var topDisplay = [];
var mainDisplay = [];

function myNumbers(a) {
	let number = event.target.value;
		mainDisplay.push(number);
		display.value = mainDisplay.join('');
	console.log(display.value);
}

function operators(b) {
	let op = event.target.value;
		if(op !== "=") {
			signCount += 1;
		}
			if(op === "=") {
				topDisplay.push(display.value);
				subDisplay.innerHTML = topDisplay.join(' ') + " =";
				equals();
			} else if(signCount <= 1) {
				topDisplay.push(display.value);
				topDisplay.push(op);
				subDisplay.innerHTML = topDisplay.join(' ');
			} else if(signCount >= 2) {
				topDisplay.push(display.value);
				topDisplay.push(op);
				subDisplay.innerHTML = topDisplay.join(' ');
			}
	console.log(signCount);
	mainDisplay = [''];
}

function equals() {			//no for...in loops. Stop asking;	Called from operators function when "=" button pressed
	var i, j, a, b;
	problem:
	for (i = 0; i < topDisplay.length; i++) {
		if(topDisplay.length === 1) {
			display.value = x;
			break problem;
		} else {
			(function() {
				switch(topDisplay[i]) {
					case "*":
						a = Number(topDisplay[i - 1]);
						b = Number(topDisplay[i + 1]);
							console.log(a, b);
							multiply.call(this, [a, b]);
							topDisplay.splice(i - 1, 3, x);
							return equals();
					case "/":
						a = Number(topDisplay[i - 1]);
						b = Number(topDisplay[i + 1]);
							console.log(a, b);
							divide.call(this, [a, b]);
							topDisplay.splice(i - 1, 3, x);
							return equals();
					case "+":
						a = Number(topDisplay[i - 1]);
						b = Number(topDisplay[i + 1]);
							console.log(x);
							console.log(a, b);
							add.call(this, [a, b]);
							topDisplay.splice(i - 1, 3, x);
							return equals();
					case "-":
						a = Number(topDisplay[i - 1]);
						b = Number(topDisplay[i + 1]);
							console.log(a, b);
							subtract.call(this, [a, -b]);
							topDisplay.splice(i - 1, 3, x);
							return equals();
					default:
						"Error";
						console.log(i);
				}
			}).call(topDisplay);
		}	
	}
	console.log(topDisplay);
};

function erase() {
	let length = mainDisplay.length;
	for(i = length; i > 0; i--) {  			// permanently resets display
		mainDisplay.pop([i]);
		topDisplay = [];
		display.value = mainDisplay;
	}
	subDisplay.innerHTML = "Hello again!";
	display.value = "";
};

function add(numbers) {
	x = 0;
	for (i = 0; i < numbers.length; i++) {
		x += numbers[i];
	};
	console.log(x);
	return x;
}

function subtract(numbers) {
	x = 0;
	for (i = 0; i < numbers.length; i++) {
		x += numbers[i];
	};
	console.log(x);
	return x;
}

function multiply(numbers) {
	x = 1;
	for (i = 0; i < numbers.length; i++) {
		x *= numbers[i];
	};
	console.log(x);
	return x;
}

function divide(numbers) {
	x = 1;
	for (i = 0; i < numbers.length; i++) {
		x /= numbers[i];
	};
	console.log(x);
	return x;
}

function randomMath() {									// Function used to test different operators and accuracy
	erase.call();

	let a = Math.floor(Math.random() * 100);
	let b = Math.floor(Math.random() * 100);
	let op = ['+', '-', '*', '/'];
	let randomOp = op[Math.floor(op.length * Math.random())];
	let final = a + randomOp + b;
	console.log(final);
	subDisplay.innerHTML = a + " " + randomOp + " " + b + " =";
		if(randomOp === '+') {
			add.call(this, [a, b]);
		} else if(randomOp === '-') {
			subtract.call(this, [a, -b]);
		} else if(randomOp === '*') {
			multiply.call(this, [a, b]);
		} else if (randomOp === '/') {
			divide.call(this, [a, b]);
		}
	display.value = x;
}

/*

*/