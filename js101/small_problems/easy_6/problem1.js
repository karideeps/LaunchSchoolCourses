/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `repeater()` that takes `string` as an argument
    initialize `resultString` to an empty string
    split `string` into an array of chars and iterate through the array
      add each character twice to `resultString`
    return `resultString`

*/

function repeater(string) {
  return string.split('').map( character => character.repeat(2)).join('');
}




// Test cases:
console.log(repeater('Hello') === "HHeelllloo");
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");
console.log(repeater('') === "");