/*

Problem:
  Input: array
  Output: same array

Algorithm:
  define `doubleNumbers()` that takes `numbers` as an argument
    iterate from 0 to numbers.length - 1
      reassign each number = number * 2

  return `numbers` arrah

*/


function doubleNumbers(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] *= 2;
  }
  return numbers;
}


// Test cases:
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers); // => [2, 8, 6, 14, 4, 12]
