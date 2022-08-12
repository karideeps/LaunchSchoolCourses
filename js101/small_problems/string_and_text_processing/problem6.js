/*

Problem:
  Input: String
  Output: String

Algorithm:
  define `staggeredCase()` that takes `string` as an argument
    split `string` into an array of chars
    transform the array of chars
      if index is even
        uppercase
      if index is odd
        lowercase
      join array

*/

function staggeredCase(string) {
  return string.split('')
               .map((character, index) => index % 2 === 0 ? character.toUpperCase() : character.toLowerCase())
               .join('');
}


// Test cases:
console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");