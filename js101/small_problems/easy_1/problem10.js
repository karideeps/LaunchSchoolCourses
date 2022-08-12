/*

Problem:
  Input: Number
  Output: Number


Algorithm:
  Create `arrayOfNumbers` to hold numbers
  iterate over numbers from 1 to number
    if number is divisible by 3 and 5 add it to array
    if it is divisible by 5 add it to arry
    if number is divisible by 3 add it to array
  reduce `arrayOfNumbers`
*/

function multisum(number) {
  let arrayOfNumbers = []
  for (let i = 1; i <= number; i += 1) {
    if (i % 5 === 0 && i % 3 === 0) {
      arrayOfNumbers.push(i);
    } else if (i % 5 === 0 || i % 3 === 0) {
      arrayOfNumbers.push(i);
    } else {
      continue;
    }
  }

  return arrayOfNumbers.reduce (function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
}




// Test cases:

console.log(multisum(20) === 98);
console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);