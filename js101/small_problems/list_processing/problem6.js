/*

Problem:
  Input: string
  Output: array of strings

Algorithm:
  define `palindromes` that takes `string` as an argument
    initialize `substringsArray` to substrings(string);
    select substrings that are palindromes


*/


function palindromes(string) {
  let substringsArray = substrings(string);
  return substringsArray.filter(function (element) {
    if (element.length === 1) return false;
    return element === element.split('').reverse().join('');
  });
}



function substrings(string) {
  let substringsArray = [];
  for (let firstNumber = 0; firstNumber < string.length; firstNumber += 1) {
    for (let secondNumber = firstNumber + 1; secondNumber <= string.length; secondNumber += 1) {
      substringsArray.push(string.slice(firstNumber, secondNumber));;
    }
  }

  return substringsArray
}

// test cases:
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));