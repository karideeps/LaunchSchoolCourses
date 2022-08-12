/*

Problem:
  Input: string
  Output: boolean

Algorithm:
  define `isUpperCase()` that takes `string` as an argument
    split `string` into an `arrayOfCharacters`
    select only characters that are lowercase letters
    if selection is empty
      return true
    else
      false

*/

// const LOWERCASE_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',]

function isUppercase(string) {
  return string.split('')
              .filter(element => /[a-z]/.test(element))
              .length === 0;

}


// Test cases:
console.log(isUppercase('t') === false);
console.log(isUppercase('T') === true);
console.log(isUppercase('Four Score') === false);
console.log(isUppercase('FOUR SCORE') === true);
console.log(isUppercase('4SCORE!') === true);
console.log(isUppercase('') === true);