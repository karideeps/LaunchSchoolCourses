const readlineSync = require('readline-Sync');

let noun = readlineSync.question("Enter a noun: ");

let verb = readlineSync.question("Enter a verb: ");

let adjective = readlineSync.question("Enter an adjective: ");

let adverb = readlineSync.question("Enter an adverb: ");

console.log(`Do you walk your ${adjective} ${noun} ${adverb}? That's hilarious!`)
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`)
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`)
