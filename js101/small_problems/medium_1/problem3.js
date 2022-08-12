/*

Problem:
  Input: Number
  Output: Number

Algorithm:
  define `maxRotation()` that takes `number` as an argument
    change` number` into a `string`
    remove first digit and append it to the end
    remove second digit and append it to the end
    remove third digit and append it to the end
    remove fourth digit and append it to the end
    remove fifth digit and append it to the end

    // do the iteration string.length - 1 times

*/

function maxRotation(number) {
  let numberOfRotations = number.toString().split('').length - 2
  let splicedChar;
  let resultNumber = number;
  for (let i = 0; i <= numberOfRotations; i += 1) {
    let arrayOfChars = resultNumber.toString().split('');
    splicedChar = arrayOfChars.splice(i, 1);
    arrayOfChars = arrayOfChars.concat(splicedChar);
    arrayOfChars = arrayOfChars.join('');
    resultNumber = Number(arrayOfChars);
  }
  return resultNumber;

}


// Test cases
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845