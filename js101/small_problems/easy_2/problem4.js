/*

Problem:
  Input: Number
  Output: Number

Algorithm:
  pass `number` into `multiply()` twice

*/




function multiply(number1, number2) {
  return number1 * number2;
}

function square(number) {
  return multiply (number, number);
}


// Test cases:
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true




