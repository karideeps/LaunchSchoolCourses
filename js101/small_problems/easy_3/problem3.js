/*

Problem:
  Input: integer
  Output: string

Algorithm:
  define `stringy()` that takes `number` as an argument
    initialize `resultString` to ''
    iterate from 1 to `number`
      if add `number % 2` to result string;
    
      return `resultString`

*/

function stringy(number) {
  let resultString = '';
  for (let i = 1; i <= number; i ++) {
    resultString += (i % 2)
  }
  return resultString;
}


// Test cases:
console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");