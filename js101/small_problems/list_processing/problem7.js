/*

Problem:
  Input: array of Numbers
  Output: number

Algorithm:
  define `sumOfSums` that takes `arrayOfNumbers` as an argument
    mulitply number in index 0 by length of array - index
      add it to sum
    mulitiply number in index 1 by length of array - index
      add it to sum
    ...

*/
/*
function sumOfSums(arrayOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    sum += (arrayOfNumbers[i] * (arrayOfNumbers.length - i))
  }
  return sum;
}
*/

function sumOfSums(arrayOfNumbers) {
  return arrayOfNumbers.reduce((accumulator, currentValue, currentIndex) => {
    return accumulator + currentValue * (arrayOfNumbers.length - currentIndex)}, 0)
}


// Test cases:
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35