/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `swap()` that takes `string` as an input
    spit string into an array of words and assign it to `arrayOfWords`
    for each word in the array
      swap the first and last letter

*/

function swap(string) {
  let arrayOfWords = string.split(' ');

  changedWordsArray = arrayOfWords.map(function (word) {
    if (word.length <= 1) {
      return word;
    } else {
      return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
    }


  });

  return changedWordsArray.join(' ');

}


// Test cases
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"