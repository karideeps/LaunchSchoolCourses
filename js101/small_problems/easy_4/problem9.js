/*

Problem:
  Input: string
  Output: object

Algorithm:
  define `wordSizes()` that takes `string` as an input

  initialize `basicString` to ''
  split`string` into an `arrayOfCharacters`
  iterate through `arrayOfCharacters`
    if character is a-zA-Z
      add it to string or character is a while space
    else
      continue

  initialize `resultsObject` to {}

  split string `arrayOfWords`
  iterate through every word in `arrayOfWords`
    if `resultsObject` does NOT have `word`.length
      initialize it to 0
    else 
      iterate it by 1

*/

function wordSizes(string) {
  basicString = '';
  arrayOfCharacters = string.split('');

  arrayOfCharacters.forEach(function (character) {
    if (/[a-zA-Z ]/.test(character)) {
      basicString += character;
    }
  });

  resultsObject = {};

  arrayOfWords = basicString.split(' ');
  arrayOfWords.forEach(function (word){
    if (!resultsObject.hasOwnProperty(word.length)) {
      resultsObject[word.length] = 1;
    } else {
      resultsObject[word.length] += 1;
    }
  })
 return resultsObject;
}











// Test cases:
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}