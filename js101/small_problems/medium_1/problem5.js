/*

Problem:
  Input: String
  Otuput: String

Algorithm:
  define `wordToDigit()` that takes `string` as an input
    initialize `numbers` to an array of ['zero', 'one', 'two',... etc.]
    split `string` into an array of words
    convert words to numbers
      if the last character in word had a punction, add the punctioon

*/

const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function wordToDigit(string) {

  arrayOfWords = string.split(' ');

  return arrayOfWords.map(function (word) {
    if (NUMBERS.includes(word.slice(0, word.length - 1)) || NUMBERS.includes(word) ) {
      if (!/[a-z]/i.test(word[word.length - 1])) {
        return NUMBERS.indexOf(word.slice(0, word.length - 1)) + word[word.length - 1];
      }
      return NUMBERS.indexOf(word);
    }
    return word;
  }).join(' ');
}


// Test cases:
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') == "Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(wordToDigit('The weight is done.') === "The weight is done.");