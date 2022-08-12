/*

A collection of spelling blocks has two letters per block, as shown in this list:

Copy Code
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

Problem:
  Input: string
  Output: boolean
  
Algorithm:
  define `isBlockWord()` that takes `word` as an argument
    declare 'unusedBlock' to an array containing arrays
     split `word` into an array of chars
      iterate through each letter
        iterate through each array in `unusedBlock`
          if letter matches either element of the innerblock
            change block to false
            break
          return false
        filter out false reults and reassign array to ununsedBlock

*/

function isBlockWord(word) {
  let unusedBlocks = [
    ['B', 'O'],
    ['X', 'K'],
    ['D', 'Q'],
    ['C', 'P'],
    ['N', 'A'],
    ['G', 'T'],
    ['R', 'E'],
    ['F', 'S'],
    ['J', 'W'],
    ['H', 'U'],
    ['V', 'I'],
    ['L', 'Y'],
    ['Z', 'M'],
  ]
  
  let arrayOfChars = word.split('').map(char => char.toUpperCase());
  
  for (let i = 0; i < arrayOfChars.length; i += 1){
    if (!unusedBlocks.flat().includes(arrayOfChars[i])) return false;
    for (let j = 0; j < unusedBlocks.length; j += 1) {
      if (arrayOfChars[i] === unusedBlocks[j][0] || arrayOfChars[i] === unusedBlocks[j][1]) {
        unusedBlocks[j] = false;
        break;
      }
    }
  }
  
  return true;
  
}






// Test cases:

console.log(isBlockWord('BATCh') === true);
console.log(isBlockWord('BUTCH') === false);
console.log(isBlockWord('jest') === true);
console.log(isBlockWord('BATCH') === true);
console.log(isBlockWord('BUTCH') === false);
console.log(isBlockWord('jest') === true);
console.log(isBlockWord('floW') === true);
console.log(isBlockWord('APPLE') === false);
console.log(isBlockWord('apple') === false);
console.log(isBlockWord('apPLE') === false);
console.log(isBlockWord('Box') === false);