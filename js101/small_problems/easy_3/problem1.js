/*

Problem:
  Input: string
  Output: string

Algorithm:
  initialize `crunch()` that takes `string` as a parameter
    if `string.length()` is 0 or 1 return `string`
    create an `arrayOfCharacters` from the `string`
    initialize `newWord` to an empty array
    add first character of `arrayOfCharacters` to `newWord`
    iterate through `arrayOfCharacters`
      if character matches the last character of `newWord` next
      else add character to `newWord`
    return `newWord` joined

*/
/*
function crunch(string) {
  // if (string.length === 0) {
  //   return string
  // }

  let arrayOfCharacters = string.split('');
  let newWord = [];
  newWord.push(arrayOfCharacters.shift());

  arrayOfCharacters.forEach(function(character) {
    if (newWord[newWord.length - 1] !== character) {
      newWord.push(character);
    }
  });

  return newWord.join('');
}

*/

function crunch(string) {
  let crunchText = ''
  arrayOfCharacters = string.split('');

  arrayOfCharacters.forEach(function(character) {
    if (!RegExp(character).test(crunchText)) {
      crunchText += character;
    }
  })
  console.log(crunchText);
}


/* Launch School's soluction
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    // console.log(text[index]);
    // console.log(text[index - 1]);
    // console.log(text[index] !== text[index-1]);

    if (text[index] !== text[index - 1]) {
      crunchText += text[index];
    }

    index += 1;
    // console.log(`crunchText:${crunchText}`);
  }

  return crunchText;
}
*/


// Test cases:

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
// console.log(crunch('aaa') === 'a');
// console.log(crunch('4444abcabccba') === "4abcabcba");
// console.log(crunch('ggggggggggggggg') === "g");
// console.log(crunch('a') === "a");
// console.log(crunch('') === "");