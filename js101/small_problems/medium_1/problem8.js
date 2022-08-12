/*

Problem:
  Input: number
  Output: number

Algorithm:
  define `fibonacci()` that takes `number` as an input
    initialize `fibonacciNumbers` to an array
    if length of `fibonacciNumbers` is equal to the number
      return `fibonacciNumbers[number - 1]
    else
      compute fibonacci(number) and push it to `fibonacciNumbers`

*/

const FIBONACCI_NUMBERS = [1, 1]

function fibonacci(number) {
  if (number <= FIBONACCI_NUMBERS.length) {
    return FIBONACCI_NUMBERS[number - 1];
  }

  let nextFibonacciNumber = fibonacci(number - 1) + fibonacci(number - 2);
  FIBONACCI_NUMBERS.push(nextFibonacciNumber);
  return FIBONACCI_NUMBERS[number - 1]
}

// Test cases
console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);