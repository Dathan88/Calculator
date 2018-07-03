const display = document.getElementById('display');
const subDisplay = document.getElementById('subDisplay');
const myOp = document.getElementById('signs');
const myNumber = document.getElementById('number');
let mainDisplay = [];
let topDisplay = [];
	topDisplay.forEach(function (value, i) {
		console.log('%d: %s', i, value);
	});

function myNumbers(a) {
	let number = event.target.value;
		mainDisplay.push(number);
		display.value = mainDisplay.join('');

	console.log(display.value);
}

function operators(b) {
	topDisplay.push(display.value);
	let op = event.target.value;
		topDisplay.push(op);
		subDisplay.innerHTML = topDisplay.join(' ');
	mainDisplay = [''];

	console.log(mainDisplay);
	console.log(subDisplay);
}

function equals(c) {
	topDisplay.push(display.value);
		topDisplay.push(' = ');
		subDisplay.innerHTML = topDisplay.join(' ');
		mainDisplay = [''];

	let a = parseInt(topDisplay[0]);
	let sign = topDisplay[1];
	let b = parseInt(topDisplay[2]);
	let problem = a + sign + b;

	console.log(a, b);
	console.log(problem);

			function answer(a, b) {
				if(sign === '+') {
			return add([a, b]);
		} else if(sign === '-') {
			return subtract([a, -b]);
		} else if(sign === '*') {
			return multiply([a, b]);
		} else if (sign === '/') {
			return divide([a, b]);
		}
	};
	answer(a, b);
	console.log(topDisplay);
	console.log(subDisplay);
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

function randomMath() {
	let length = mainDisplay.length;
	
	for(i = length; i > 0; i--) {  	// permanently resets display
		mainDisplay.pop([i]);
		topDisplay = [];
		display.value = mainDisplay;
		subDisplay.innerHTML = "Hello again!";
	}

	let a = Math.floor(Math.random() * 100);
	let b = Math.floor(Math.random() * 100);
	let op = ['+', '-', '*', '/'];
	let randomOp = op[Math.floor(op.length * Math.random())];
	let final = a + randomOp + b;
	console.log(a, b, randomOp, final);  // Function used to test different operators and accuracy

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
	let sum = 0;
	for (i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	};
	mainDisplay.push(sum);
	display.value = mainDisplay.join('');
	console.log(sum);
	return sum;
}

function subtract(numbers) {
	let sum = 0;
	for (i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	};
	mainDisplay.push(sum);
	display.value = mainDisplay.join('');
	console.log(sum);
	return sum;
}

function multiply(numbers) {
	let sum = 1;
	for (i = 0; i < numbers.length; i++) {
		sum *= numbers[i];
	};
	mainDisplay.push(sum);
	display.value = mainDisplay.join('');
	console.log(sum);
	return sum;
}

function divide(numbers) {
	let sum = 1;
	for (i = 0; i < numbers.length; i++) {
		sum /= numbers[i];
	};
	mainDisplay.push(sum);
	display.value = mainDisplay.join('');
	console.log(sum);
	return sum;
}

console.log();