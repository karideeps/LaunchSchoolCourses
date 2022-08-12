/*

Problem:
  Input: String
  Output: string

Algorithm:
  split string into an array of words
  initialize `index` to 0
  interate through odd from 3 to number
    add 1 to `index`
  return arrayofwords index

*/

function middleWord(string) {
  arrayOfWords = string.split(' ');

  let index = 0;
  for (let i = 3; i <= arrayOfWords.length; i += 2) {
    index += 1
  }
  return arrayOfWords[index];
}

// Test cases:

console.log(middleWord('hello') === 'hello');
console.log(middleWord('hello my') === 'hello');
console.log(middleWord('hello my name') === 'my');
console.log(middleWord('hello my name is') === 'my');
console.log(middleWord('hello my name is Deepak') === 'name');
console.log(middleWord('hello my name is Deepak Joshy') === 'name');
console.log(middleWord('one two three four five six seven eight') === 'four');
console.log(middleWord('one two three four five six seven') === 'four');