let readlineSync = require('readline-sync');

const MESSAGES = require('./calculatorBonusFeatures_messages.json');

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function validNumber(number) {
  if (number.trimStart() === '' || isNaN(Number(number))) {
    return false;
  } else {
    return true;
  }
}

let playAgain;

do {
  prompt(messages('welcome'));

  let number1;
  do {
    prompt(messages('firstNumber'));
    number1 = readlineSync.question();
  } while (!validNumber(number1));

  let number2;
  do {
    prompt (messages('secondNumber'));
    number2 = readlineSync.question();
  } while (!validNumber(number2));

  let operation;
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('operation'));
    operation = readlineSync.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${messages('output')} ${output}`);

  prompt(messages('playAgain'));
  playAgain = readlineSync.question();
} while (playAgain === 'yes');