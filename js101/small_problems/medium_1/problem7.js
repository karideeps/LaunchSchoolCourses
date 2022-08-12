/*

Problem:
  Input: number
  Output: number

Algorithm:
  define `fibonacci()` that takes `number` as an argument
    if 1 or 2 return 1
    let `firstNumber` = 1
    let `secondNumber` = 1
    let currentNumber;
    from 3 to and including number
      `currentNumber` to `firstNumber` + `secondNumber`
      firstNumber = secondNumber
      secondNumber = currentNumber
    return currentNumber


*/

function fibonacci(number) {
  if (number <= 2) return 1;

  let firstNumber = 1;
  let secondNumber = 1;
  let currentNumber;
  for (let i = 3; i <= number; i += 1) {
    currentNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = currentNumber;
  }

  return currentNumber;
}


// Test cases:

console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);