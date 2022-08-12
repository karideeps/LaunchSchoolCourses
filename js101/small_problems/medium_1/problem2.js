/*

Problem:
  Input: number
  Output: number

Algorithm:
  define `rotateRightmostDigits()` that takes `number` and `rotator` as an argument
    conver `number` into a string
    seperate `string` into an `arrayOfchars`
    get first half of the item
      slice (0, arrayOfChars.length - rotator)
    get second half of the item
      slice (rotator-1)
    join the string
    return a number

*/

function rotateRightmostDigits(number, rotator) {
  let arrayOfChars =  number.toString().split('');
  let firstPart =  arrayOfChars.slice(0, arrayOfChars.length - rotator)
  let secondPart = arrayOfChars.slice(arrayOfChars.length + 1 - rotator)
  let lastPart = arrayOfChars[arrayOfChars.length - rotator]

  return Number((firstPart + ',' + secondPart + ',' + lastPart).split(',').join(''))
}



// Test cases:
console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);