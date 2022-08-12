/*

Problem:
  Input: String
  Output: String

Algorithm:
  Get user name
  if last character is !
      return screaming text
    else
      return normal text
*/


let readlineSync = require('readline-sync');

let name = readlineSync.question("What is your name? ");

if (name[name.length -1] === '!') {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
