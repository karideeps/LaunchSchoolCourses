/*

Problem:
  Input: String
  Output: String

Algorithm:
  define `reverseSEntence()` that takes `string` as an argument
    split string at spaces
    reverse words
    join string with spaces

*/

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}




// Test cases:
console.log(reverseSentence('') === "");
console.log(reverseSentence('Hello World') === "World Hello");
console.log(reverseSentence('Reverse these words') === "words these Reverse");