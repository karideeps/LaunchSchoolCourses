/*

Problem:
  Input: numter
  Output: number

Algorithm:
  define `sumSquareDifference()` that takes `number` as an input
    initialize `resultSum` to 0
    add numbers from 1 to `number` to sum
    square sum
    subtract numbers squared from 1 to number from num
  return `resultSum`
*/

function sumSquareDifference(number) {
  let resultsSum = 0;
  for (let i = 1; i <= number; i += 1) {
    resultsSum += i
  }
  resultsSum = resultsSum ** 2;

  for (let i = 1; i <= number; i+= 1) {
    resultsSum -= (i ** 2);
  }

  return resultsSum;
}



// Test cases:
console.log(sumSquareDifference(3) === 22); // --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) === 2640); 
console.log(sumSquareDifference(1) === 0); 
console.log(sumSquareDifference(100) === 25164150); 