/*

Problem:
  Input: two stings
  Output: strings

Algorithm:
  Get strngs from user
  Log the results to the screen
*/

let readlineSync = require('readline-sync');

let firstNumber = Number(readlineSync.question("Enter the first number:\n"));
let secondNumber = Number(readlineSync.question("Enter the second number:\n"));

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed()}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);