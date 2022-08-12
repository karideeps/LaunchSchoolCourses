/*

Problem:
  Input: two string arguments:
  output: string

  Algorithm:
    compare length of two stings
      assign shorter string to `shorterString`
      assing longer string to `longerString`
    concact strings
*/

function shortLongShort(string1, string2) {
  let shorterString;
  let longerString;
  
  if (string1.length < string2.length) {
    shorterString = string1;
    longerString = string2;
  } else {
    shorterString = string2;
    longerString = string1;
  }
  return `${shorterString}${longerString}${shorterString}`
}


// Test Cases:
console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");