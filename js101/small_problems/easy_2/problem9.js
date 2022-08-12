/*

Problem:
  Input: string
  Output: number

Algorithm:
  Initialize `digits` to an array of diits from 0 to 9
  initialize `sum` to 0
  split string array into any array of characters.
  reverse the array of characters
  iterate throug the array of characters
    get numeric digit from `digits` array
    mulitply that by 10 ^ index
    add this value to sum;

*/

function stringToInteger(string) {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;

  string.split('').reverse().forEach(function(element, index) {
    sum += digits[element] * 10 ** index;
  });
return sum;
}



// Test cases:
console.log(stringToInteger("54321") === 54321); // logs true
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true