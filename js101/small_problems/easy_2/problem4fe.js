/*

Problem:
  Input:
    Number
    number of times to be multiplied

Algorithm:
  let `value` to `number`
  if `power` is equal to 1
    return `number`
  else iterate from 1 to `power`
  value = multiply (value, num)

*/


function multiply(number1, number2) {
  return number1 * number2;
}

function powerToTheN(number, power) {
  let value = number;

  for (let i = 1; i < power; i += 1) {
    value = multiply(value, number);
  }

  return value;
}



// Test case:
console.log(powerToTheN(3, 1) === 3);
console.log(powerToTheN(2, 2) === 4);
console.log(powerToTheN(3, 2) === 9);
console.log(powerToTheN(4, 3) === 64);
console.log(powerToTheN(2, 4) === 16);