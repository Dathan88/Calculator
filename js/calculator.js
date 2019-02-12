const display = document.getElementById('display');
const topDisplay = document.getElementById('topDisplay');
const mySign = document.getElementById('sign');
const myNumber = document.getElementById('number');
var x;
var signCount = 0;
var topDisplayArray = [];
var displayArray = [];

//pushes number button values to arrays to be displayed
function myNumbers(a) {
	let number = event.target.value;
		displayArray.push(number);
		display.value = displayArray.join('');
	console.log(display.value);
}

//pushes numbers and operator pressed into top display and calls operate function when = is pressed
function signs(b) {
	let op = event.target.value;
	if(op !== "=" ) {
		signCount += 1;
		topDisplay.setAttribute('style', 'text-align: center;');
		console.log(signCount);
	}
		if(op === "=" && signCount === 0) {
			displayArray = [];
			topDisplayArray = [];
			topDisplay.innerHTML = "Try again!";
			display.value = "Try again!";
		} else if(op === "=" && signCount >= 1) {
			topDisplayArray.push(display.value);
			topDisplay.innerHTML = topDisplayArray.join(' ') + " =";
			operate();
		} else {
			topDisplayArray.push(display.value);
			topDisplayArray.push(op);
			topDisplay.innerHTML = topDisplayArray.join(' ');
		}
	displayArray = [''];
	console.log(topDisplayArray);
	console.log(displayArray);
}

//Called from signs function when "=" button pressed; calls math functions
function operate() {
	let i, a, b;
problem:
	for (i = 0; i < topDisplayArray.length; i++) {
		if(topDisplayArray.length === 1) {
			console.log(x);
			display.value = Math.round(x * 1000) / 1000;
			displayArray = [];
			topDisplayArray = [];
			topDisplay.setAttribute('style', 'text-align: right;');
			break problem;
		} else {
			(function() {
				switch(topDisplayArray[i]) {
					case "*":
						a = Number(topDisplayArray[i - 1]);
						b = Number(topDisplayArray[i + 1]);
							console.log(a, b);
							multiply.call(this, [a, b]);
							topDisplayArray.splice(i - 1, 3, x);
							return operate();
					case "/":
						a = Number(topDisplayArray[i - 1]);
						b = Number(topDisplayArray[i + 1]);
							console.log(a, b);
							divide.call(this, [a, b]);
							topDisplayArray.splice(i - 1, 3, x);
							return operate();
					case "+":
						a = Number(topDisplayArray[i - 1]);
						b = Number(topDisplayArray[i + 1]);
							console.log(a, b);
							add.call(this, [a, b]);
							topDisplayArray.splice(i - 1, 3, x);
							return operate();
					case "-":
						a = Number(topDisplayArray[i - 1]);
						b = Number(topDisplayArray[i + 1]);
							console.log(a, b);
							subtract.call(this, [a, b]);
							topDisplayArray.splice(i - 1, 3, x);
							return operate();
				}
			}).call(topDisplayArray);
		}	
	}
};

//clears displays and arrays
function erase() {
	topDisplay.setAttribute('style', 'text-align: center;');
	displayArray = [];
	topDisplayArray = [];
	topDisplay.innerHTML = "";
	display.value = "";
};

function add(numbers) {
	let a = numbers[0];
	let b = numbers[1];
	x = a + b;
	return x;
}

function subtract(numbers) {
	let a = numbers[0];
	let b = numbers[1];
	x = a - b;
	return x;
}

function multiply(numbers) {
	let a = numbers[0];
	let b = numbers[1];
	x = a * b;
	return x;
}

function divide(numbers) {
	let a = numbers[0];
	let b = numbers[1];
	x = a / b;
	return x;
}

// Function used to test different operators and accuracy
function randomMath() {
		erase.call();
	let a = Math.floor(Math.random() * 100);
	let b = Math.floor(Math.random() * 100);
	let op = ['+', '-', '*', '/'];
	let randomOp = op[Math.floor(op.length * Math.random())];
	let final = a + randomOp + b;
	topDisplay.innerHTML = a + " " + randomOp + " " + b + " =";
		if(randomOp === '+') {
			add.call(this, [a, b]);
		} else if(randomOp === '-') {
			subtract.call(this, [a, -b]);
		} else if(randomOp === '*') {
			multiply.call(this, [a, b]);
		} else if (randomOp === '/') {
			divide.call(this, [a, b]);
		}
	display.value = Math.round(x * 1000) / 1000;
	topDisplay.setAttribute('style', 'text-align: right;');
}