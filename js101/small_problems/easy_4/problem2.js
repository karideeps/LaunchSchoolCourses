let readlineSync = require('readline-sync');

let choices = []

for (let i = 1; i < 6; i += 1) {
  
  choices.push(readlineSync.question(`Enter the ${i}${numberModifier(i)} number: `));
}

function numberModifier(number) {
  switch(number) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

let lastNumber = readlineSync.question('Enter the last number: ');

if (choices.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${choices.join(',')}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${choices.join(',')}.`);
}
