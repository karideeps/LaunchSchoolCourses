/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `isRealPalindrome()` that takes `string` as an input
    initialize `stringToCompare` to ''
      make `string` lowercase
      split string into an array of characters
      iterate thorugh array of characters
        if chacter is a uppercase, lowercase letter, or number add to`stringToCompare`
    
    return `stringToCompare` into `isPalindrome`

*/



function isPalindrome(string) {
  reversedString = string.split('').reverse().join('');
  return string === reversedString;
}


function isRealPalindrome(string) {
  let stringToCompare = '';
  string.toLowerCase().split('').forEach(function (character) {
    if (/\w/.test(character)) {
      stringToCompare += character;
    }
  });

   return isPalindrome(stringToCompare);

}

// Test cases:
console.log(isRealPalindrome('madam') === true);
console.log(isRealPalindrome('Madam') === true);
console.log(isRealPalindrome("Madam, I'm Adam") === true);
console.log(isRealPalindrome('356653') === true);
console.log(isRealPalindrome('356a653') === true);
console.log(isRealPalindrome('123ab321') === false);