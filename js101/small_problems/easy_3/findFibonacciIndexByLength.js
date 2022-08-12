/*

Problem:
  Input: Number
  Output: Number;

Algorithm:
  define `findFibonacciIndexByLength()` that takes `requiredLength` as an argument
    initialize `fibonacciNumbers` to [1, 1]
      while fibonacciNumbers[fibonacciNumber.length - 1] numberLenth < requiredLength
        push the sum of last two fibonacciNumbers to fibonacciNumbers
      return `fibonacciNumbers.length`

*/

function findFibonacciIndexByLength(requiredLength) {
  let fibonacciNumbers = [1n, 1n];
    while(findNumberLength(fibonacciNumbers[fibonacciNumbers.length - 1]) < requiredLength) {
      fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] +
                            fibonacciNumbers[fibonacciNumbers.length - 2])
    }
  return BigInt(fibonacciNumbers.length);
}

function findNumberLength(number) {
  return number.toString().split('').length;
}

// Test cases:
console.log(findFibonacciIndexByLength(2n) === 7n); 
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// console.log(findNumberLength(2344));
// console.log(findNumberLength(1234567890123456789012345678901234567890n));