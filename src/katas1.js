function oneThroughTwenty() {
	let number = [];

	for (let counter = 1; counter <= 20; counter++) {
		number.push(counter);
	}

	return number;
}

console.log(oneThroughTwenty());

function evensToTwenty() {
	let number = [];

	for (let counter = 1; counter <= 20; counter++) {
		if (counter % 2 === 0) {
			number.push(counter);
		}
	}

	return number;
}

console.log(evensToTwenty());

function oddsToTwenty() {
	let number = [];

	for (let counter = 0; counter <= 20; counter++) {
		if (counter % 2 === 1) {
			number.push(counter);
		}
	}

	return number;
}

console.log(oddsToTwenty());

function multiplesOfFive() {
	let number = [];

	for (let counter = 1; counter <= 100; counter++) {
		if (counter % 5 === 0) {
			number.push(counter);
		}
	}

	return number;
}

console.log(multiplesOfFive());

function squareNumbers() {
	let number = [];

	for (let counter = 1; counter <= 10; counter++) {
		number.push(counter * counter);
	}

	return number;
}

console.log(squareNumbers());

function countingBackwards() {
	let number = [];

	for (let counter = 20; counter >= 1; counter--) {
		number.push(counter);
	}

	return number;
}

console.log(countingBackwards());

function evenNumbersBackwards() {
	let number = [];

	for (let counter = 20; counter >= 1; counter--) {
		if (counter % 2 === 0) {
			number.push(counter);
		}
	}

	return number;
}

console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
	let number = [];

	for (let counter = 20; counter >= 1; counter--) {
		if (counter % 2 === 1) {
			number.push(counter);
		}
	}

	return number;
}

console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
	let number = [];

	for (let counter = 100; counter >= 5; counter--) {
		if (counter % 5 === 0) {
			number.push(counter);
		}
	}

	return number;
}

console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
	let number = [];

	for (let counter = 10; counter >= 1; counter--) {
		number.push(counter * counter);
	}

	return number;
}

console.log(squareNumbersBackwards());
