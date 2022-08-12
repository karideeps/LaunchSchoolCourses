/*

Problem:
  Input: number
  Output: number
  Rules:
    Return number if it is a double number
    Else return number * 2

Algorithm:
  define `twice()` that takes `number` as an argument;
    if `number` is a double number 
      return it
    else
      return `number` * 2

  define `isDoubleNumber` that takes `number` as an argument
    if `number` to string,length % 2 !=== 0
      return false
    if `number`.toString().slice(0, (number.toString().length / 2)) === `number`.toString().endsWith string slice
      return true
    else
      return false

*/

function isDoubleNumber(number) {

  if (number.toString().length % 2 !== 0) {
    return false;
  }

  let beginningString = number.toString().slice(0, (number.toString().length / 2));

  if (number.toString().endsWith(beginningString)) {
    return true;
  } else {
    return false;
  }
}

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

// Test Cases:
// console.log(isDoubleNumber(44));
// console.log(isDoubleNumber(123));
// console.log(isDoubleNumber(123123));
console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);