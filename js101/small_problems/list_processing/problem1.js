/*

Problem:
  Input: Number
  Output: Number

Algorithm:
  define `sum()` that takes `number` as an argument
    covert number into a string
    split string into an array of chars
    reduce number to it's sum

*/

function sum(number) {
  return number.toString()
               .split('')
               .reduce( (accumulator, currentValue) => accumulator + Number(currentValue), 0);
}




// Test cases
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45