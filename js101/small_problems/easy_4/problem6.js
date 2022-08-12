/*

Problem:
  Input: number
  Output: boolean

Algorithm:
  define `isPalindromicNumber()` that takes `number` as an argument
    convert number into a string
    split the string into an array of chars
    reverse the array of chars
    join the array of chars
    compare to origininal string

*/

function isPalindromicNumber(number) {
  stringNumber = number.toString();
  return stringNumber === stringNumber.split('').reverse().join('');
}


// Test cases:
console.log(isPalindromicNumber(34543) === true);
console.log(isPalindromicNumber(123210) === false);
console.log(isPalindromicNumber(22) === true);
console.log(isPalindromicNumber(5) === true);