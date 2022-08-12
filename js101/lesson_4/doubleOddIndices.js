/*

Problem:
  Input: array of numbers
  Output: array of numbers

Algorithm:
  define `doubleOddIndicies()` that takes `numbers` as an argument
    initialize `resultsArray` to an empty array
    iterate from 0 to numbers.length - 1
      if i is odd
        push number[i] * 2 to `resultsArray`
      else
        push number to `resultsArray`

*/

function doubleOddIndicies(number) {
  let resultsArray = [];
  for (let index = 0; index < number.length; index += 1) {
    if (index % 2 === 1) {
      resultsArray.push(number[index] * 2);
    } else {
      resultsArray.push(number[index]);
    }
  }
  return resultsArray;
}



// Test cases:
console.log(doubleOddIndicies([1, 2, 3, 4])); // => [1, 4, 3, 8]