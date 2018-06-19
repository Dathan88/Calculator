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
		sum = sum + numbers[i];
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

function operate() {
	let a = Math.floor(Math.random() * 100);
	let b = Math.floor(Math.random() * 100);
	let op = ['+', '-', '*', '/'];
	let sign = op[Math.floor(op.length * Math.random())];
	let final = a + sign + b;
	console.log(a, b, sign, final);

	if(sign === '+') {
		return add([a, b]);
	} else if(sign === '-') {
		return subtract([a, -b]);
	} else if(sign === '*') {
		return multiply([a, b]);
	} else if (sign === '/') {
		return divide([a, b]);
	} else {
		return "Is not a number";
	}
}

const btn = document.querySelectorAll('button');
const display = document.getElementById('display');
let displayArray = [];

btn.forEach((button) => {
  button.addEventListener('click', (e) => {
   displayArray.push(e.target.value);
	display.value = displayArray.join('');
  });
});

function erase() {
	let length = displayArray.length;
	for(i = length; i > 0; i--) {
		displayArray.pop([i]);
		document.getElementById('display').value = displayArray;
	}
}


console.log(erase());