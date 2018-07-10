const display = document.getElementById('display');
const topDisplay = document.getElementById('topDisplay');
const mySign = document.getElementById('sign');
const myNumber = document.getElementById('number');
var x;
var topDisplayArray = [];
var displayArray = [];

function myNumbers(a) {						//pushes number button values to arrays to be displayed
	let number = event.target.value;
		displayArray.push(number);
		display.value = displayArray.join('');
	console.log(display.value);
}

function signs(b) {							//pushes numbers and operator pressed into top display and calls equals function when button is pressed
	let op = event.target.value;
	console.log(topDisplayArray);
	console.log(displayArray);
	if(op === "=") {
		topDisplayArray.push(display.value);
		topDisplay.innerHTML = topDisplayArray.join(' ') + " =";
		operate();
	} else {
		topDisplayArray.push(display.value);
		topDisplayArray.push(op);
		topDisplay.innerHTML = topDisplayArray.join(' ');
	}
	displayArray = [''];
}

function operate() {						//Called from operators function when "=" button pressed; calls math functions depending on operators in arr
	let i, a, b;

	problem:
	for (i = 0; i < topDisplayArray.length; i++) {
		if(topDisplayArray.length === 1) {
			display.value = x;
			displayArray = [];
			topDisplayArray = [];
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

function erase() {
	displayArray = [];
	topDisplayArray = [];
	topDisplay.innerHTML = "Hello again!";
	display.value = "";
};

function add(numbers) {
	let a = numbers[0];
	let b = numbers[1];
	x;
	x = a + b;
	console.log(a,b)
	console.log(x);
	return x;
}

function subtract(numbers) {
	let a = numbers[0];
	let b = numbers[1];
	x;
	x = a - b;
	console.log(a,b)
	console.log(x);
	return x;
}

function multiply(numbers) {
	let a = numbers[0];
	let b = numbers[1];
	x;
	x = a * b;
	console.log(a,b)
	console.log(x);
	return x;
}

function divide(numbers) {
	let a = numbers[0];
	let b = numbers[1];
	x;
	x = a / b;
	console.log(a,b);
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
	display.value = x;
}

/*

*/