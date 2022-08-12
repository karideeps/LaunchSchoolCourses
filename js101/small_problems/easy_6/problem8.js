/*

Problem:
  Input: two numbers
  Output: array

Algorithm:
  define `sequence()` that takes `count` and `startingNumber` as arguments
    initialize `resultsArray` to []
    iterate from 1 to count 
      push starting number * iterator to results array

*/

function sequence(count, startingNumber) {
  let resultsArray = [];
  for (let i = 1; i <= count; i += 1) {
    resultsArray.push(i * startingNumber);
  }
  return resultsArray;
}



// Test cases:

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []