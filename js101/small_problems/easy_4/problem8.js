/*

Problem:
  Input: string
  Output: object

Algorithm:
  define `wordSizes()` that takes `string` as an input
    initialize `resultsObject` to {}
    split string `arrayOfWords`
    iterate through every word in `arrayOfWords`
      if `resultsObject` does NOT have `word`.length
        initialize it to 0
      else 
        iterate it by 1

*/

function wordSizes(string) {

  resultsObject = {};

  if (string.length === 0) {
    return resultsObject;
  }

  arrayOfWords = string.split(' ');
  arrayOfWords.forEach(function (word) {
    if (!resultsObject.hasOwnProperty([word.length])) {
      resultsObject[word.length] = 1;
    } else {
      resultsObject[word.length] += 1;
    }

  });

  return resultsObject;

}


// Test cases:
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')) // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); 