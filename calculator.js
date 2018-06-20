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

//-- above -- functions that process math problems and find correct values
//-- below -- functions/variables that combine the above with web calculator app

const btn = document.querySelectorAll('button');
const display = document.getElementById('display');
let displayArray = [];

btn.forEach((button) => {
  button.addEventListener('click', (e) => {
   displayArray.push(e.target.value);	// each click puts button value into display 
	display.value = displayArray.join('');
  });
});


function operate(e) {
	let sign = event.target.value;
	let firstNum = display.value += sign;


	console.log(firstNum);

}


function erase() {
	let length = displayArray.length;

	for(i = length; i > 0; i--) {  	// permanently resets display
		displayArray.pop([i]);
		display.value = displayArray;
	}
}

console.log();
