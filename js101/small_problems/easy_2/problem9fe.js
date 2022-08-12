/*

Problem:
  Input: String
  Output: Number

Algorithm:
  create an object of hexadecimal digits (0 - F)
  initialize `value` to 0

  split string into an array of letters
  make all characters in the string lower case
  reverse the characters in the string
  iterate through the characters
    covert character into corresponding digit and multiply it by 16 ** index
    add that to value

  return valuse


*/

function hexadecimalToInteger(string) {
  let HEXDIGITS = {
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
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  }

  let value = 0;

  string.split('').reverse().map(char => char.toLowerCase()).forEach(function(element, index) {
    value += (HEXDIGITS[element] * (16 ** index));
  });

  return value;
}

// Test case:
console.log(hexadecimalToInteger('1F') === 31);
console.log(hexadecimalToInteger('4D9f') === 19871); // logs true