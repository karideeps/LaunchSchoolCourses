/*

Problem:
  Input: array of strings
  OUtput: array of strings

Algorithm:
  define `removeVowels()` that takes `arrayOfStrings` as an input
    transform each string into a string with vowels removed


*/

function removeVowels(arrayOfStrings) {

  return arrayOfStrings.map(string => string.split('')
                                            .filter((character) => !/[aeiou]/i.test(character))
                                            .join('')
  );

}


// Test cases:
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]