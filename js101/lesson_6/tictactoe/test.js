const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

let answer = readline.question('Press enter to continue...');
