const readlineSync = require('readline-sync');

const CHOICES = {

  rock: {
    validChoices: ['rock', 'r'],
    winsAgainst: ['scissors', 'lizard'],
  },

  paper: {
    validChoices: ['paper', 'p'],
    winsAgainst: ['rock', 'spock'],
  },

  scissors: {
    validChoices: ['scissors', 's'],
    winsAgainst: ['paper', 'lizard'],
  },

  lizard: {
    validChoices: ['lizard', 'l'],
    winsAgainst: ['spock', 'paper'],
  },

  spock: {
    validChoices: ['spock', 'sp'],
    winsAgainst: ['rock', 'scissors'],
  },

};

const WINS_NEEDED = 3;

const LINE = '-------------------------------------------------------';

function prompt (message) {
  console.log(`=> ${message}`);
}

function displayWelcomeMessage() {
  console.clear();
  prompt('Welcome to Rock Paper Scissors Lizard Spock!');
  prompt(LINE);
  prompt(`First to win ${WINS_NEEDED} rounds wins the match!`);
  prompt(LINE);
}

function initializeScoreBoard() {
  return {
    roundsPlayed: 0,
    playerScore: 0,
    computerScore: 0,
    ties: 0,
  };
}

function playMatch(scoreBoard, matchesPlayed) {

  if (matchesPlayed > 0) {
    console.clear();
  }

  while (noWinner(scoreBoard)) {

    displayScoreBoard(scoreBoard);

    let playerChoice = getPlayerChoice();

    let computerChoice = calculateComputerChoice();

    displayChoices(playerChoice, computerChoice);

    let roundWinner = calculateRoundWinner(playerChoice, computerChoice);

    displayRoundWinner(roundWinner);

    iterateScoreBoard(scoreBoard, roundWinner);

  }

}

function noWinner(scoreBoard) {
  return scoreBoard.playerScore < WINS_NEEDED &&
         scoreBoard.computerScore < WINS_NEEDED;
}

function displayScoreBoard(scoreBoard) {
  prompt(`Player Score: ${scoreBoard.playerScore}`);
  prompt(`Computer Score: ${scoreBoard.computerScore}`);
  prompt(`Ties: ${scoreBoard.ties}`);
  prompt(LINE);
}

function getPlayerChoice() {
  prompt('Please enter r for Rock, p for Paper, s for scissors, l for Lizard, sp for spock.');
  let playerChoice = readlineSync.question().toLowerCase();

  while (!validPlayerChoice(playerChoice)) {
    playerChoice = getPlayerChoice();
  }

  return convertPlayerChoice(playerChoice);
}

function findValidChoices() {
  let validChoicesNestedArray = [];
  for (let property in CHOICES) {
    validChoicesNestedArray.push(CHOICES[property]['validChoices']);
  }
  return validChoicesNestedArray;
}

function validPlayerChoice(playerChoice) {
  return findValidChoices().flat().includes(playerChoice);
}

function convertPlayerChoice(playerChoice) {
  let convertedPlayerChoice;

  findValidChoices().forEach(function (validChoices, index) {
    if (validChoices.includes(playerChoice)) {
      convertedPlayerChoice = Object.keys(CHOICES)[index];
    }
  });

  return convertedPlayerChoice;
}

function calculateComputerChoice() {
  let index = Math.floor(Math.random() * Object.keys(CHOICES).length);
  return Object.keys(CHOICES)[index];
}

function displayChoices(playerChoice, computerChoice) {
  console.clear();
  prompt(`You chose ${playerChoice} and the computer chose ${computerChoice}.`);
}

function calculateRoundWinner(playerChoice, computerChoice) {
  if (CHOICES[playerChoice]['winsAgainst'].includes(computerChoice)) {
    return 'player';
  } else if (playerChoice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

function displayRoundWinner(roundWinner) {
  if (roundWinner === 'computer') {
    prompt('The computer won this round.');
  } else if (roundWinner === 'player') {
    prompt('Congratulations, you won this round!');
  } else {
    prompt("It's a tie!");
  }
  prompt(LINE);
}

function iterateScoreBoard(scoreBoard, roundWinner) {
  if (roundWinner === 'computer') {
    scoreBoard.computerScore += 1;
  } else if (roundWinner === 'player') {
    scoreBoard.playerScore += 1;
  } else {
    scoreBoard.ties += 1;
  }
  scoreBoard.roundsPlayed += 1;
}

function calculateMatchWinner(scoreBoard) {
  return scoreBoard.playerScore === WINS_NEEDED ? 'player' : 'computer';
}

function displayMatchWinner(matchWinner, scoreBoard) {
  switch (matchWinner) {
    case 'player':
      prompt (`Congratulations, you won the match! You beat the computer in ${scoreBoard.roundsPlayed} rounds.`);
      break;
    case 'computer':
      prompt (`You lost the match. The computer beat you in ${scoreBoard.roundsPlayed} rounds.`);
      break;
  }
}

function getPlayAgain() {
  prompt('Would you like to play again? Enter "y" or "yes" for yes or "n" or "no" for no.');
  let playAgain = readlineSync.question().toLowerCase();

  while (!validPlayAgain(playAgain)) {
    playAgain = getPlayAgain();
  }

  return playAgain;
}

function validPlayAgain(playAgain) {
  return ['y', 'n', 'yes', 'no'].includes(playAgain);
}

function displayGoodbyeMessage(matchesPlayed) {
  prompt(`Thank you for playing Rock, Paper, Scissors, Lizard, Spock! You played ${matchesPlayed} ${matches(matchesPlayed)}.`);
}

function matches(matchesPlayed) {
  return matchesPlayed > 1 ? 'matches' : 'match';
}

displayWelcomeMessage();

let matchesPlayed = 0;

let playAgain = 'y';

while (playAgain === 'y' || playAgain === 'yes') {

  let scoreBoard = initializeScoreBoard();

  playMatch(scoreBoard, matchesPlayed);

  matchesPlayed += 1;

  let matchWinner = calculateMatchWinner(scoreBoard);

  displayScoreBoard(scoreBoard);

  displayMatchWinner(matchWinner, scoreBoard);

  playAgain = getPlayAgain();

}

displayGoodbyeMessage(matchesPlayed);