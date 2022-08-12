/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `doubleConsonants()` that takes `string` as an argument;
    split `string` into an `arrayOfCharacters`
    iterate through the string
      if the string is a consonant 
        repeat it
      else
        string

*/

function doubleConsonants(string) {
  return string.split('').map(function (character) {
    if (/[b-df-hj-np-tv-z]/i.test(character)) {
      return character.repeat(2);
    } else {
      return character;
    }
  }).join('');
}



// Test cases:
console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");