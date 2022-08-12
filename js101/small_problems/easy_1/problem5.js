/*

Problem:
  Input: get two strings from user
  Output: two strings

Algorithm:
  Prompt user for two numbers.
  Calculate tip ammount:
    `tipPercentage/100 * bill`
  Log both values via string interpolation

*/

let readlineSync = require('readline-sync');

let bill = readlineSync.question("What is the bill? ");
let tipPercentage = readlineSync.question("What is the tip percentage? ");

let tip = Number(tipPercentage) / 100 * Number(bill)
let total = tip + Number(bill)

// console.log(bill);
// console.log(tipPercentage);
// console.log(tip);
// console.log(total);

console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${total.toFixed(2)}`);