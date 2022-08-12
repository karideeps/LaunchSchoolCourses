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

function isIncluded(array, value) {
  if (array.some((element) => value > element)) {
    return true;
  } else {
    return false;
  }
}

if (isIncluded(choices, lastNumber)) {
  console.log(`The number ${lastNumber} is greater than at least one of the following numbers: ${choices.join(",")}.`);
} else {
  console.log(`The number ${lastNumber} is less than all the following numbers: ${choices.join(',')}.`);
}