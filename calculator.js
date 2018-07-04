const display = document.getElementById('display');
const subDisplay = document.getElementById('subDisplay');
const myNumber = document.getElementById('number');
const myOp = document.getElementById('signs');
let clicks = 0;
	myOp.addEventListener('click', function(e) { clicks += 1; });
let num0, num1, sign, equation;
let mainDisplay = [];
let topDisplay = [];
let myProblem = {
	add: {num0, sign, num1},
	subtract: {num0, sign, num1},
	multiply: {num0, sign, num1},
	divide: {num0, sign, num1}
	};

function Equation(num0, sign, num1) {
	this.num0 = num0;
	this.sign = sign;
	this.num1 = num1;
	equation = num0 + sign + num1;
	console.log(num0, sign, num1);
	console.log(equation);
	console.log(myProblem.add);
	switch(sign) {
		case "+":
			Object.defineProperties(myProblem, {add: {num0, sign, num1}});
			console.log(myProblem.add);
			break;
		case "-":
			myProblem.subtract = equation;
			console.log(equation);
			break;
		case "*":
			myProblem.multiply = equation;
			console.log(equation);
			break;
		case "/":
			myProblem.divide = equation;
			console.log(equation);
			break;
		default:
			display.innerHtml = "Error";
	}
}

function myNumbers(a) {
	let number = event.target.value;
		mainDisplay.push(number);								// called when number buttons are pressed
		display.value = mainDisplay.join('');
	console.log(display.value);
};

function operators(b) {											// called when sign buttons are pressed
	let op = event.target.value;
	topDisplay.push(display.value);
		topDisplay.push(op);
		subDisplay.innerHTML = topDisplay.join(' ');
		mainDisplay = [''];
	if(clicks === 0) {
		num0 = parseInt(display.value);
		sign = op;
		return Equation(num0, sign)
	};
	console.log(clicks);
};

function equals(c) {
	topDisplay.push(display.value);
	topDisplay.push('=');									// called when equals button is pressed
		subDisplay.innerHTML = topDisplay.join(' ');
		mainDisplay = [''];
	num1 = parseInt(display.value);
	console.log(myProblem.add);
	console.log(num0, sign, num1);
	return Equation(num0, sign, num1);
	//let a = parseInt(topDisplay[0]);
	//let op = topDisplay[1];
	//let b = parseInt(topDisplay[2]);
	//let problem = a + " " + op + " " + b + " =";
/*
	function answer(num0, num1) {
		if(sign === '+') {
			return add([num0, num1]);
		} else if(sign === '-') {
			return subtract([num0, -num1]);
		} else if(sign === '*') {
			return multiply([num0, num1]);
		} else if (sign === '/') {
			return divide([num0, num1]);
		}
	};
*/
	//answer(num0, num1);
};

function erase() {
	let length = mainDisplay.length;
	
	for(i = length; i > 0; i--) {  							// permanently resets display
		mainDisplay.pop([i]);
		topDisplay = [];
		display.value = mainDisplay;
		subDisplay.innerHTML = "Hello again!";
	}
};

function randomMath() {
	let a = Math.floor(Math.random() * 100);				// Function used to test different operators and accuracy
	let b = Math.floor(Math.random() * 100);
	let op = ['+', '-', '*', '/'];
	let randomOp = op[Math.floor(op.length * Math.random())];
	let final = a + randomOp + b;			
		subDisplay.innerHTML = a + " " + randomOp + " " + b;

	let length = mainDisplay.length;
		for(i = length; i > 0; i--) {  							// permanently resets display
			mainDisplay.pop([i]);
			topDisplay = [];
			display.value = mainDisplay;
			subDisplay.innerHTML = "Hello again!";
		}
	
	if(randomOp === '+') {
		return add([a, b]);
	} else if(randomOp === '-') {
		return subtract([a, -b]);
	} else if(randomOp === '*') {
		return multiply([a, b]);
	} else if (randomOp === '/') {
		return divide([a, b]);
	}
};

function add(numbers) {
	let sum = 0;
	for (i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	};
	mainDisplay.push(sum);
	display.value = mainDisplay.join('');
	console.log(sum);
	return sum;
};

function subtract(numbers) {
	let sum = 0;
	for (i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	};
	mainDisplay.push(sum);
	display.value = mainDisplay.join('');
	console.log(sum);
	return sum;
};

function multiply(numbers) {
	let sum = 1;
	for (i = 0; i < numbers.length; i++) {
		sum *= numbers[i];
	};
	mainDisplay.push(sum);
	display.value = mainDisplay.join('');
	console.log(sum);
	return sum;
};

function divide(numbers) {
	let sum = 1;
	for (i = 0; i < numbers.length; i++) {
		sum /= numbers[i];
	};
	mainDisplay.push(sum);
	display.value = mainDisplay.join('');
	console.log(sum);
	return sum;
};

console.log();

//

/*

*/