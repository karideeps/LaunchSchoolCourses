/*

Program:
  Input: String
  Output: Number

Algorithm:
  spit string into an array of characters
  initialize `multiplier`
  If first character is '-'
    Set multiplier to -1 otherwise set multiplier to 1
  Check if first character is '+' or '-'

  Initialize `DIGITS` to an object of digits

  Split string into an array of characters
  if first character is - or + shift the first character
  Initialize value to 0
  For each element of the array
    Multiplye `value` by 10 and add it to the element
  return value
*/

function stringToSignedInteger(string) {

  let DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }

  let multiplier = 1;
  arrayOfChars = string.split('');

  if (arrayOfChars[0] === '-') {
    multiplier = -1
  }

  if (arrayOfChars[0] === '-' || arrayOfChars[0] === '+') {
    arrayOfChars.shift()
  }

  let value = 0;

  arrayOfChars.forEach(function(element) {
    value = (value * 10) +(DIGITS[element]);
  })

  return value * multiplier;
}


// Test cases:
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570")  === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true