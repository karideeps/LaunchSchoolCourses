/*

Problem:
  Input: String
  Output: string

Algorithm:
  define `staggeredCase()` that takes `string` as an argument
    split `string` into an `arrayOfCharacters`
    initialize `caseCounter` = 0
      // if `caseCounter` is odd, capitalize
    iterate through characters in the index (map)
      if character is an alphabet
        caseCounter + 1
      if caseCounter is odd
        uppercase
      if caseCounter is even
        lowercase

*/

function staggeredCase(string) {
  let caseCounter = 0;
  return string.split('').map(function (element) {
    if (/[a-z]/i.test(element)) {
      caseCounter += 1;
      if (caseCounter % 2 === 1) {
        return element.toUpperCase();
      } else {
        return element.toLowerCase();
      }
    }
    return element;

  }).join('');
}




// Test cases:
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs" );