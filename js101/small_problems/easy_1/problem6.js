/*

Problem:
  Input: two stings
    First string is the limit number
    Second string is to decide if the operator is * or +
  Output: string
    It will be a number initially

Algorithm:
  Get integer from user
  Get "s" or "p" from the user
  if s
    add all integers from 0 to 5
    log result to screen
    else
    multiply all itegers from 0 to 5
    log result to screen

*/

let readlineSync = require('readline-Sync');

let integer = Number(readlineSync.question("Please enter an integer greater than 0: "));
let operator = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

arrayOfIntegers = []
for (let i = 1; i <= integer; i += 1) {
  arrayOfIntegers.push(i);
}


if (operator === 's') {
  sum = arrayOfIntegers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`)
} else {
  product = arrayOfIntegers.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
  });
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
}
