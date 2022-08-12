/*

Problem:
  Input: Two numbers
  Output: boolean

Alogirthm:
  if argument 1 is truty and argument 2 is falsy return true
  if arugment 1 is falsy and arugment 2 is truth return true
  else return false
*/

function xor(value1, value2) {
  if (!!value1 === true && !!value2 === false) {
    return true;
  } else if (!!value1 === false && !!value2 === true) {
    return true;
  } else {
    return false;
  }
}




// Test cases:
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);