/*

Problem:
  Input: string
  Output: array of Strings

Algorithm:
  define `substrings()` that takes `string` as an argument
    initialize `substringsArray` to an empty array
    from i (0) to length of string
      from i + 1 to length of string
        push to subStringsArray string.slice(firstNumber, secondNumber)

*/

function substrings(string) {
  let substringsArray = [];
  for (let firstNumber = 0; firstNumber < string.length; firstNumber += 1) {
    for (let secondNumber = firstNumber + 1; secondNumber <= string.length; secondNumber += 1) {
      substringsArray.push(string.slice(firstNumber, secondNumber));;
    }
  }

  return substringsArray
}


// Test cases:
console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]