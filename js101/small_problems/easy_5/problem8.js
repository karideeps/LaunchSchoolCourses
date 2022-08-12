/*

Problem:
  input: number
  Output: array of numbers

Algorithm:
  define `digitsList()` that takes `number` as an argument
    split number into a string of characters
    covert each character into a number

*/

/*
function digitList(number) {
  return number.toString().split('').map(function (element) {
    return Number(element);
  });
}
*/

function digitList(number) {
  return number.toString().split('').map(element => Number(element));
}

// Test cases
console.log( digitList(12345)) // === [1, 2, 3, 4, 5];
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]