const readline = require('readline-sync');

const PLAY_AGAIN_CHOICES_YES = ['y', 'yes'];

const PLAY_AGAIN_CHOICES_NO = ['n', 'no'];

const VALID_PLAY_AGAIN_CHOICES = (
  PLAY_AGAIN_CHOICES_YES.concat(PLAY_AGAIN_CHOICES_NO)
);

function getPlayAgain() {
  let playAgain;
  while (!validPlayAgain(playAgain)) {
    console.log('Would you like to play again? y or yes for yes, n or no for no.');
    playAgain = readline.question().toLowerCase();
  }
  return PLAY_AGAIN_CHOICES_YES.includes(playAgain) ? 'yes' : 'no';
}

function validPlayAgain(playAgain) {
  return VALID_PLAY_AGAIN_CHOICES.includes(playAgain);
}

let playAgain = getPlayAgain();
console.log(playAgain);