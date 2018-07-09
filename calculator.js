const display = document.getElementById('display');
const subDisplay = document.getElementById('subDisplay');
const mySign = document.getElementById('sign');
const myNumber = document.getElementById('number');
var x;
var subArray = [];
var displayArray = [];

function myNumbers(a) {
	let number = event.target.value;
		displayArray.push(number);
		display.value = displayArray.join('');
	console.log(display.value);
}

function signs(b) {
	let op = event.target.value;
	console.log(subArray);
	console.log(displayArray);
	if(op === "=") {
		subArray.push(display.value);
		subDisplay.innerHTML = subArray.join(' ') + " =";
		operate();
	} else {
		subArray.push(display.value);
		subArray.push(op);
		subDisplay.innerHTML = subArray.join(' ');
	}
	displayArray = [''];
}

function operate() {			//no for...in loops. Stop asking;	Called from operators function when "=" button pressed
	var i, a, b;

	problem:
	for (i = 0; i < subArray.length; i++) {
		if(subArray.length === 1) {
			display.value = x;
			displayArray = [];
			subArray = [];
			break problem;
		} else {
			(function() {
				switch(subArray[i]) {
					case "*":
						a = Number(subArray[i - 1]);
						b = Number(subArray[i + 1]);
							console.log(a, b);
							multiply.call(this, [a, b]);
							subArray.splice(i - 1, 3, x);
							return operate();
					case "/":
						a = Number(subArray[i - 1]);
						b = Number(subArray[i + 1]);
							console.log(a, b);
							divide.call(this, [a, b]);
							subArray.splice(i - 1, 3, x);
							return operate();
					case "+":
						a = Number(subArray[i - 1]);
						b = Number(subArray[i + 1]);
							console.log(a, b);
							add.call(this, [a, b]);
							subArray.splice(i - 1, 3, x);
							return operate();
					case "-":
						a = Number(subArray[i - 1]);
						b = Number(subArray[i + 1]);
							console.log(a, b);
							subtract.call(this, [a, -b]);
							subArray.splice(i - 1, 3, x);
							return operate();
				}
			}).call(subArray);
		}	
	}
};

function erase() {
	displayArray = [];
	subArray = [];
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
	console.log(numbers);
	console.log(x);
	return x ;
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