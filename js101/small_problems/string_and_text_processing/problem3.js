/*

Problem:
  Input: string
  Output: object

Algorithm:
  define `letterCaseCount()` that takes `string` as an argument
    initialize `resultsObject` = {lowercase: 0, uppercase: 0, neither = 0}
    iterate through characters in the string
      if character is lowercase, iterate resultsObject.lowercase
      if character is uppercase, iterate resultsObject.uppercase
      else itterate resultsObject.neither
    return resultsObject

*/

function letterCaseCount(string) {
  let resultsObject = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  string.split('').forEach(function (character) {
    if (/[a-z]/.test(character)) {
      resultsObject.lowercase += 1;
    } else if (/[A-Z]/.test(character)) {
      resultsObject.uppercase += 1;
    } else {
      resultsObject.neither += 1;
    }
  });

  return resultsObject;
}



// Test cases:
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }