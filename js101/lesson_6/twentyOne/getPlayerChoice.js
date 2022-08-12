const readline = require('readline-sync');

const VALID_HIT_CHOICES = ['h', 'hit'];

const VALID_STAY_CHOICES = ['s', 'stay'];

const VALID_PLAYER_CHOICES = VALID_HIT_CHOICES.concat(VALID_STAY_CHOICES);

function getPlayerChoice() {
  let playerChoice;
  while (!validPlayerChoice(playerChoice)) {
    console.log(`Would you like to hit or stay? h or hit to hit, s or stay to stay.`);
    playerChoice = readline.question().toLowerCase();
  }
  return VALID_HIT_CHOICES.includes(playerChoice) ? 'hit' : 'stay';
}

function validPlayerChoice(playerChoice) {
  return VALID_PLAYER_CHOICES.includes(playerChoice);
}

let playerChoice = getPlayerChoice();
console.log(playerChoice);

