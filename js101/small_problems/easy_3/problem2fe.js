/*

Problem:
  Input: string, message length
  Output: string

Algorithm:
  define `logInBox()` that takes `phrase` and `bannerLength` as arguments
    Initialize `outsideLines` using `bannerLength`
    Initialize `penultimateLines` using `bannerLength`
    Initialize `message` to an empty object

    Iterate through `phrase`
      add 10 characters to message[0]
      add 10 characters to message[1]
      add 10 characters to message[2]
      add remaining characters to message[3]


*/


function logInBox(phrase, bannerLength) {

  let message = {};
  let phraseCharacters = phrase.split('');
  for (let i = 0; i <= (Math.floor((phrase.length / bannerLength))); i += 1) {
    let messageLine = '';
      for (let counter = 1; counter <= bannerLength; counter += 1) {
        nextCharacter = phraseCharacters.shift();
        if (nextCharacter === undefined) {
          messageLine += ' ';
        } else {
          messageLine += nextCharacter;
        }
        
      }
    message[i] = messageLine;
  }

  let outsideLines =  `+-${'-'.repeat(bannerLength)}-+`;
  let penultimateLines = `+ ${' '.repeat(bannerLength)} +`;

  console.log(outsideLines);
  console.log(penultimateLines);
  for (let line in message) {
    console.log(`+ ${message[line]} +`);
  }

  console.log(penultimateLines);
  console.log(outsideLines);
}



// Test cases:
logInBox('hello my name is Deepak', 10);
logInBox('does this also work with really long lines that I want truncated?', 5);
logInBox('what about short lines', 50);