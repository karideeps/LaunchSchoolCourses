/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `clearnUp()` that takes `phrase` as an argument
    spit `phrase` into an `arrayOfCharacters`
    define `resultPhrase` and initialize it to an empty string.
    iterate through `arrayOfCharacters`
      if `character` is an alphabet
        add it to `resultPhrase`
      if `character` is not an alphabet and `resultPhrase` does not end with a space
        add a '' to `resultPhrase`
*/

function cleanUp(phrase) {
  arrayOfCharacters = phrase.split('');
  let resultPhrase = ''

  arrayOfCharacters.forEach(function(character) {
    if (/[a-zA-Z]/.test(character)) {
      resultPhrase += character;
    } else {
      if (!resultPhrase.endsWith(' ')) {
        resultPhrase += ' ';
      }
    }
  });

  return resultPhrase;
}


// Test cases:
console.log(cleanUp("---what's my +*& line?") === " what s my line ");
