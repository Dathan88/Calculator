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
		console.log();
	} else if(sign === '-') {
		return subtract([a, -b]);
		console.log();
	} else if(sign === '*') {
		return multiply([a, b]);
		console.log();
	} else if (sign === '/'){
		return divide([a, b]);
	} else {
		return "Is not a number";
	}
}

function submit() {

}

console.log(operate());

console.log(submit());

