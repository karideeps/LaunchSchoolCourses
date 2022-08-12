/*

Problem:
  Input: String
  Output: String

Algorithm:
  define `swapCase()` that takes `string as an argument
    split string into an array of chars
    transform each char into its opposite
    join array of chars

*/

function swapCase(string) {
  return string.split('').map(function (character) {
    if (character === character.toLowerCase()) {
      return character.toUpperCase();
    } else {
      return character.toLowerCase();
    }
  }).join('');
}



// Test cases:
console.log(swapCase('CamelCase') === "cAMELcASE");
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");