/*

Problem:
  Input: number
  Output: number

Algorithm:
  define `reverseNumber()` that takes `number` as an argument
    convert `number` into a string
    split string into characters
    reverse the string
    join the string
    convert it into a number

*/

function reverseNumber(number) {
  return Number(number.toString().split('').reverse().join(''))
}


// Test cases:
console.log(reverseNumber(12345) === 54321);
console.log(reverseNumber(12213) === 31221);
console.log(reverseNumber(456) === 654);
console.log(reverseNumber(12000) === 21); /// -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1) === 1);