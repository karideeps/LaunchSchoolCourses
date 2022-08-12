/*

Problem:
  Input: string
  Output: string
  Rules:
    palindromes are cpitalized
  
Algorithm:
  define `changeMe()` that takes `string` as an argument
    split string into `arrayOfWords`
    iterate through `arrayOfWords`
      if `words` is a palindrome capitalize it
      else continue

  define `palindrome()` that takes `word` as an argument
    let palindromeWord = split words into an array of chars, reverse, and join
    if palindromeWord === word
      true
    else 
      false

*/

function changeMe(string) {
  arrayOfWords = string.split(' ').map(function (word) {
    if (palindrome(word)) {
      return word.toUpperCase();
    } else {
      return word;
    }
  });
  return arrayOfWords.join(' ');
}


function palindrome(word) {
  return word === (word.split('').reverse().join(''));
}


// Test cases:
console.log(changeMe("We will meet at noon") === "We will meet at NOON");
console.log(changeMe("No palindromes here") === "No palindromes here");
console.log(changeMe("") === "");
console.log(changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally");


// Test cases:
console.log(palindrome('noon') === true);
console.log(palindrome('here') === false);
console.log(palindrome('mom') === true);