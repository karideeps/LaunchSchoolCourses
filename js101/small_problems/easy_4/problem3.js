const readlineSync = require('readline-sync');

const CURRENT_YEAR = new Date().getFullYear();

let currentAge = readlineSync.question("What is your age? ");

let retirementAge = readlineSync.question("At what age would you like to retire? ");

yearsLeft = retirementAge - currentAge

console.log(`It's ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR + yearsLeft}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);

/*

Fe:
If `new` was not used then the `Date()` constructor would be called instead of `new Date()`.
The `Date()` constructor returns the date value as a string.

*/