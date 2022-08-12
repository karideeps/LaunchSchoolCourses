/*

Poblem:
  Input: Three strings that we get from user
  Output: String (with a number interpolated)

Algorithm:
  Ask user for the first number
  Ask user for the second number
  Ask user for the operation to perform.
  Perform the operation on the two numbers.
  Print the result to the terminal.


*/


const readlineSync = require('readline-sync');

function addArrowToPrompt(message) {
  return `=> ${message}`;
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

console.log(addArrowToPrompt('Welcome to Calculator'));

let number1 = readlineSync.question(addArrowToPrompt("What is the first number?\n"));

while (invalidNumber(number1)) {
  console.log(addArrowToPrompt("Hmmm... that doesn't look like a valid number."));
  number1 = readlineSync.question();
}

let number2 = readlineSync.question(addArrowToPrompt("What is the second number?\n"));

while (invalidNumber(number2)) {
  console.log(addArrowToPrompt("Hmmm... that doesn't look like a valid number."));
  number2 = readlineSync.question();
}

let operation = readlineSync.question(addArrowToPrompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n"));

while (!['1', '2', '3', '4'].includes(operation)) {
  console.log(addArrowToPrompt('Must chose 1, 2, 3, or 4'));
  operation = readlineSync.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

/*
if (operation === '1') {
  output = number1 + number2;
} else if (operation === '2') {
  output = number1 - number2;
} else if (operation === '3') {
  output = number1 * number2;
} else if (operation === '4') {
  output = number1 / number2;
}
*/

console.log(addArrowToPrompt(`The restult is: ${output}`));