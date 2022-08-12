/*

Problem:
  Input: Number
  Output: String

Algorithm:
  Initialize `letters` to an array with strings from `0 - 9`
  Initlize `arrayOfCharacters`
  Initilize `number` to number argument
  Until number > 0
    Get remainder from number argument
    Convert remainder to letter and add it to start`arrayOfCharacters`
    Divide number by 10 and reassign it to number
  Join `arrayOfCharacters`

*/

function integerToString(number) {
  let letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let arrayOfCharacters = []
  do {
    arrayOfCharacters.unshift(letters[number % 10]);
    number = Math.floor(number/10);
  } while (number > 0);
  return arrayOfCharacters.join('');
}




// Test cases:

console.log(integerToString(4321) === "4321");
console.log(integerToString(0) === "0");
console.log(integerToString(5000) === "5000");
console.log(integerToString(1234567890) === "1234567890");