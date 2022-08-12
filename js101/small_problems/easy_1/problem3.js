/*

Problem:
  Input: none
  Output: log all even numbers from 1 to 99 inclusively

Algoirthm:
  Iterate through numbers from 1 to 99
  If number is even
    Log it to screen
*/

for (let number = 1; number <= 99; number += 1) {
  if (number % 2 === 0) {
    console.log(number);
  }
}