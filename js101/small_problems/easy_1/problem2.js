/*
Problem:
  Input: none
  Output: log all numbers from 1 to 99 inclusive on a separate line

Algorithm:
  Iterate from 1 to 99.
  Print all odd numbers

*/

/*
let number = 1;

while (number <= 99) {
  console.log(number);
  number += 2;
}
*/


function printOddNumbers(startNumber, endNumber) {

  if (startNumber % 2 === 0) {
    startNumber += 1;
  }

  do {
    console.log(startNumber);
    startNumber += 2;
  } while (startNumber <= endNumber)
}

printOddNumbers(3, 98);

