/*

Problem:
  Input: array
  Output: array

Algorithm:
  define `runningTotal()` that takes `array` as an input
    initialize `resultsArray` to an empty array
    iterate though the array
      create a new array from 0 to current iterateion
      reduce it to a single digit
      push result to `resultsArray`

*/

function runningTotal(array) {
  let resultsArray = [];
  for (let i = 1; i <= array.length; i += 1) {
    sumArray = array.slice(0,i);
    resultsArray.push(sumArray.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }))
  }
  return resultsArray;
}



// Test cases:
console.log(runningTotal([2, 5, 13])) // === [2, 7, 20]);
console.log(runningTotal([14, 11, 7, 15, 20])) //=== [14, 25, 32, 47, 67]);
console.log(runningTotal([3])) // === [3]);
console.log(runningTotal([])) // === []);