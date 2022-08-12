/*

Problem:
  Input: number
  Output: nubmer

Algorithm:
  define `negative()` that takes `number` as an argument
    if number > 9
      return number * -1
    else return number

*/

function negative(number) {

  return number >= 0 ? number * -1 : number;
}

// Test cases
console.log(negative(5) ===  -5);
console.log(negative(-3) ===  -3);
console.log(negative(0) ===  -0);