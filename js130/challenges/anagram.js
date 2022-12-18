/*
declare class `Anagram` that takes a string as an argument

  `match()`
    Input: array of words
    Output: array of words

    filter `word` in `arrayOfWords`

        // check if it has the same number of upperCase letters
        declare `originalWordUpperCase`
        declare `wordUpperCaseChars` and assign it to `word` split and filtered.length
        if it is not equal, return `false`

      declare `originalWord` and assign it to this.originalWord split, sorted, and joined
      reassign `word` to `word` that is split, sorted, and joined


      return `word === orginalWord`

*/

class Anagram {
  constructor(originalWord) {
    this.originalWord = originalWord;
  }

  match(arrayOfWords) {
    return arrayOfWords.filter(word => {

      if (this.originalWord === word) return false;

      if (this.numberOfUpperCase(this.originalWord) !== this.numberOfUpperCase(word)) return false;

      return this.sortWord(this.originalWord) === this.sortWord(word);

    });
  }

  numberOfUpperCase(word) {
    return word.split('').filter(char => char === char.toUpperCase()).length;
  }

  sortWord(word) {
    return word.toLowerCase().split('').sort().join('')
  }
}

module.exports = Anagram;
