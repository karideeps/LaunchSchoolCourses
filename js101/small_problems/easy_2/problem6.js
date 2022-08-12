/*

Problem:
  Input: srting
  Output: string

Algorithm:
  split string into an array of words
  return second last word in the index
    word[word.length - 2]

*/

function penultimate(sentence) {
  arrayOfWords = sentence.split(' ');
  return arrayOfWords[arrayOfWords.length - 2];
}



// Test cases:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true