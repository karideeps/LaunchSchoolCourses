/*

Problem:
  Input: array, number
  Output: array

Algorithm:
  define `multiply()` that takes `arrayOfNumbers` and `multiplier` as arguments;
    initialize `resultsArray` to [];
    iterate through items in `arrayOfNumbers`
      multiply each number by `mulitpier` and add it to `resultsArray`
    return `resultsArray`

*/

function multiply(arrayOfNumbers, multiplier) {
  let resultsArray = [];
  arrayOfNumbers.forEach(function (number) {
    resultsArray.push(number * multiplier)
  });
  return resultsArray;
}



// Test cases
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]