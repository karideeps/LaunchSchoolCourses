/*

Problem:
  Input: string
  Output: oblect

Algorithm:
  define `letterPercentages()` that takes `string` as an argument
    declare `resultsObject` that has 3 properties `lowercase` `uppercase` and `neither`
    declare `lowercaseCounter` = 0
    declare `uppercaseCounter` = 0
    declare `neitherCounter` = 0
    split `string` into an array of chars
    iterate through the array of chars
      if char is a lowercase
        iterate lowercaseCounter
      if char is uppercase
        iterate uppercaseCounter
      if char is neither
        iterate neithercounter
    convert all three values into percents
      counter / string.length toFixed(2) and add it to `resultsObject`

    return `resultsObject`


*/


function letterPercentages(string) {
  let resultsObject = {};

  let lowerCaseCounter = 0;
  let upperCaseCounter = 0;
  let neitherCounter = 0;

  string.split('').forEach(function (char) {
    if (/[a-z]/.test(char)) {
      lowerCaseCounter += 1;
    } else if (/[A-Z]/.test(char)) {
      upperCaseCounter += 1;
    } else {
      neitherCounter += 1;
    }
  })
  resultsObject.lowercase = (lowerCaseCounter/string.length * 100).toFixed(2);
  resultsObject.uppercase = (upperCaseCounter/string.length * 100).toFixed(2);
  resultsObject.neither = (neitherCounter/string.length * 100).toFixed(2);

  return resultsObject;

}


// Test cases:
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }