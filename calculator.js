const display = document.getElementById('display');
const subDisplay = document.getElementById('subDisplay');
const myOp = document.getElementById('signs');
const myNumber = document.getElementById('number');
let x;
let signCount = 0;
let topDisplay = [];
let mainDisplay = [];

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

function equals() {									//called from operators function when "=" button pressed
		let i, a, b, c;									//no for...in loops. Stop asking;
	answer:
	for (i = 0; i < topDisplay.length; i++) {
		if(i > signCount) {
			break answer;
		} else {
		switch(topDisplay[i]) {
			case "*":
				a = parseInt(topDisplay[i - 1]);
				b = parseInt(topDisplay[i + 1]);
				
					console.log(a, b);
				multiply([a, b]);
			case "/":
				a = parseInt(topDisplay[i - 1]);
				b = parseInt(topDisplay[i + 1]);
		
					console.log(a, b);
				divide([a, b]);
			case "+":
				a = parseInt(topDisplay[i - 1]);
				b = parseInt(topDisplay[i + 1]);
					console.log(a, b);
				add([a, b]);
				topDisplay.splice(i - 1, 3);
			case "-":
				a = parseInt(topDisplay[i - 1]);
				b = parseInt(topDisplay[i + 1]);
		
					console.log(a, b);
				subtract([a, b]);
			default:
				"Error"
				break;
			}
		}
		console.log(topDisplay[i]);
	}
	console.log(topDisplay);
	console.log(signCount);
};

function erase() {
	let length = mainDisplay.length;
	
	for(i = length; i > 0; i--) {  	// permanently resets display
		mainDisplay.pop([i]);
		topDisplay = [];
		display.value = mainDisplay;
		subDisplay.innerHTML = "Hello again!";
	}
};

function randomMath() {									// Function used to test different operators and accuracy
	let length = mainDisplay.length;
	for(i = length; i > 0; i--) {  	
		mainDisplay.pop([i]);
		topDisplay = [];								// permanently resets display
		display.value = mainDisplay;
		subDisplay.innerHTML = "Hello again!";
	}

	let a = Math.floor(Math.random() * 100);
	let b = Math.floor(Math.random() * 100);
	let op = ['+', '-', '*', '/'];
	let randomOp = op[Math.floor(op.length * Math.random())];
	let final = a + randomOp + b;

	subDisplay.innerHTML = a + " " + randomOp + " " + b;

	if(randomOp === '+') {
		return add([a, b]);
	} else if(randomOp === '-') {
		return subtract([a, -b]);
	} else if(randomOp === '*') {
		return multiply([a, b]);
	} else if (randomOp === '/') {
		return divide([a, b]);
	}
}

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

console.log();

/*
let sign = {
			'+': function(num1, num2) {return num1 + num2},
			'-': function(num1, num2) {return num1 + num2},
			'*': function(num1, num2) {return num1 + num2},
			'/': function(num1, num2) {return num1 + num2}
		};


let sign = function() {
			for(i = 1; i < topDisplay.length; i++) {

			}
		}



*/