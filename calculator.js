function randomMath() {
	let a = Math.floor(Math.random() * 100);
	let b = Math.floor(Math.random() * 100);
	let sign = ['+', '-', '*', '/'];
	let randomOp = op[Math.floor(op.length * Math.random())];
	let final = a + sign + b;
	console.log(a, b, sign, final);  // Function used to test different operators and accuracy

	if(sign === '+') {
		return add([a, b]);
	} else if(sign === '-') {
		return subtract([a, -b]);
	} else if(sign === '*') {
		return multiply([a, b]);
	} else if (sign === '/') {
		return divide([a, b]);
	}
}

function add(numbers) {
	let sum = 0;
	for (i = 0; i < numbers.length; i++) {
		sum = sum + numbers[i];
	};
	return sum;
}

function subtract(numbers) {
	let sum = 0;
	for (i = 0; i < numbers.length; i++) {
		sum = sum -= numbers[i];
	};
	return sum;
}

function multiply(numbers) {
	let sum = 1;
	for (i = 0; i < numbers.length; i++) {
		sum = sum * numbers[i];
	};
	return sum;
}

function divide(numbers) {
	let sum = 1;
	for (i = 0; i < numbers.length; i++) {
		sum = sum / numbers[i];
	};
	return sum;
}

//-- above -- functions that process math problems and find correct values
//-- below -- functions/variables that combine the above with web calculator app

const display = document.getElementById('display');
const subDisplay = document.getElementById('subDisplay');
const myOp = document.getElementById('signs');
const myNumber = document.getElementById('number');
let subArray = [];
let displayArray = [];
let problem = {
	a: '',
	sign: '',
	b: '',
	fullProblem: function() {return this.a + this.sign + this.b;}
};

function numbers() {
	let number = event.target.value;
		displayArray.push(number);
		display.value = displayArray.join('');

	console.log(display.value);
}

function operators() {
	subArray.push(display.value);

	let op = event.target.value;
		subArray.push(op);
		subDisplay.innerHTML = subArray.join(' ');
	displayArray = [''];

	console.log(subArray);
	console.log(subDisplay);
}

function solve() {
	subArray.push(display.value);
	subDisplay.innerHTML = subArray.join(' ') + " = ";

	if(problem.sign === '+') {
		return add(a, b);
	} else if(problem.sign === '-') {
		return subtract(a, -b);
	} else if(problem.sign === '*') {
		return multiply(a, b);
	} else if (problem.sign === '/') {
		return divide(a, b);
	}

	console.log(problem); 
}

function erase() {
	let length = displayArray.length;
	
	for(i = length; i > 0; i--) {  	// permanently resets display
		displayArray.pop([i]);
		subArray = [];
		display.value = displayArray;
		subDisplay.innerHTML = "Hello again!";
	}
};

console.log(problem.fullProblem());