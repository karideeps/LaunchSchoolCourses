/*

Problem:
  input: string
  Output: string

Algorithm:
  define `swapName()` that takes `string` as an argument
    split `string` into an array of words
    reverse the words
    join them with ', '

*/

function swapName(string) {
  let arrayOfWords = string.split(' ')
  if (arrayOfWords.length === 2) {
    return arrayOfWords.reverse().join(', ');
  } else {
    return `${arrayOfWords[arrayOfWords.length - 1]}, ${arrayOfWords.slice(0, arrayOfWords.length - 1).join(' ')}`
  }

}


// Test cases
console.log(swapName('Joe Roberts') === "Roberts, Joe");
console.log(swapName('Karl Oskar Henriksson Ragvals') === "Ragvals, Karl Oskar Henriksson");