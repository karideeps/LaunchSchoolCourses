/*

Problem:
  Input: string
  Output: boolean

Algorithm:
  define `isPalindrome()` that takes `string` as an input
    initialize `reversedString` to
      split `string` into an array of chars
      reverse it
      join it
    if `string === reverseString`
      true
    else
      false


*/

function isPalindrome(string) {
  reversedString = string.split('').reverse().join('');
  return string === reversedString;
}




// Test cases:
console.log(isPalindrome('madam') === true);
console.log(isPalindrome('Madam') === false);
console.log(isPalindrome("madam i'm adam") === false);
console.log(isPalindrome('356653') === true);