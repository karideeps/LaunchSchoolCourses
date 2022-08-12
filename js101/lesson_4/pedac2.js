/*

Problem:
  Input: string
  Output: array of strings

Algorithm:
  define `palindromeSubstrings()` that takes `string` as an input
    create an array of substrings
      initialize `arrayOfSubstrigns` = []
      iterate from 0 to string length
        push string.slice to arrayOfSubstrings
  
    iterate through `arrayOfSubstrings`
      if substring is a palindrome
        add it to a new array (or use a select method?)

  define `palindrome()` that takes `word` as an argument
    if word split, reverse, join === word
      return true
    else 
      return false

*/

function palindromeSubstrings(string) {
  arrayOfSubstrings = [];
  for (let startingLetter = 0; startingLetter < string.length; startingLetter += 1) {

    let substring = string.slice(startingLetter);

    for (let endingLetter = substring.length; endingLetter > 1; endingLetter -= 1) {
      arrayOfSubstrings.push(substring.slice(0, endingLetter));
    }

  }

  arrayOfPalindromeSubstrings = [];

  arrayOfSubstrings.forEach(function (substring) {
    if (palindrome(substring)) {
      arrayOfPalindromeSubstrings.push(substring);
    };
  })

  return (arrayOfPalindromeSubstrings)
}


function palindrome(word) {
  return (word.split('').reverse().join('') === word);
}


// Test cases:
// console.log(palindrome('mom') === true);
// console.log(palindrome('Mom') === false);
// console.log(palindrome('here') === false);

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));  