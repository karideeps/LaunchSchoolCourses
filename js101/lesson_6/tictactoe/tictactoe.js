const readline = require('readline-sync');

const INITIAL_MARKER = ' ';

const HUMAN_MARKER = 'X';

const COMPUTER_MARKER = 'O';

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

const WINS_NEEDED = 3;

const MIDDLE_SQUARE = 5;

const LONG_LINE = '-'.repeat(70);

const SHORT_LINE = '-'.repeat(25);

function centerString(string, lineWidth) {
  let beginningSpaces = (lineWidth - string.length) / 2;
  return ' '.repeat(beginningSpaces) + string;
}

function displayWelcomeMessage() {
  console.clear();
  console.log(LONG_LINE);
  console.log(centerString('Welcome to Tic Tac Toe!', LONG_LINE.length));
  console.log(LONG_LINE);
  console.log('Rules:');
  console.log('');
  console.log('1. Select a square using keys 1 - 9.');
  console.log('2. You can only place your marker on an empty square.');
  console.log('3. If you get three in a row, column, or diagonal, you win!');
  console.log('4. If the computer gets three in a row, column, or diagonal, it wins.');
  console.log("5. Otherwise it's a tie.");
  console.log("6. Who makes the first move alternates every round.");
  console.log(`7. First to win ${WINS_NEEDED} rounds wins the match!`);
  console.log(LONG_LINE);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function initializeScoreBoard() {
  return {
    round: 0,
    playerWins: 0,
    computerWins: 0,
    ties: 0,
  };
}

function displayScoreBoard(scoreBoard) {
  console.log(SHORT_LINE);
  console.log(`Player Wins: ${scoreBoard.playerWins}`);
  console.log(`Computer Wins: ${scoreBoard.computerWins}`);
  console.log(`Ties: ${scoreBoard.ties}`);
  console.log(SHORT_LINE);
  prompt(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
}

function getWhoGoesFirst() {
  let whoGoesFirst;
  do {
    prompt('Who will make the first move for the first round? p or player for player, c or computer for computer');
    whoGoesFirst = readline.question().toLowerCase();
  } while (!validWhoGoesFirst(whoGoesFirst));

  return whoGoesFirst[0] === 'p' ? 'player' : 'computer';
}

function validWhoGoesFirst(whoGoesFirst) {
  return ['p', 'player', 'c', 'computer'].includes(whoGoesFirst);
}

function displayGameBoard(gameBoard, scoreBoard) {
  console.clear();
  displayScoreBoard(scoreBoard);
  console.log('');
  console.log('     |     |');
  console.log(`  ${gameBoard['1']}  |  ${gameBoard['2']}  |  ${gameBoard['3']}`);
  console.log('1    |2    |3');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${gameBoard['4']}  |  ${gameBoard['5']}  |  ${gameBoard['6']}`);
  console.log('4    |5    |6');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${gameBoard['7']}  |  ${gameBoard['8']}  |  ${gameBoard['9']}`);
  console.log('7    |8    |9');
  console.log('');
}

function initializeGameBoard() {
  let gameBoard = {};
  for (let square = 1; square <= 9; square += 1) {
    gameBoard[square.toString()] = INITIAL_MARKER;
  }
  return gameBoard;
}

function playRound(whoGoesFirst, gameBoard, scoreBoard) {
  displayGameBoard(gameBoard, scoreBoard);
  let currentPlayer = whoGoesFirst;
  while (true) {
    choosesSquare(currentPlayer, gameBoard);
    displayGameBoard(gameBoard, scoreBoard);
    if (detectWinner(gameBoard) || isBoardFull(gameBoard)) break;
    currentPlayer = currentPlayer === 'player' ? 'computer' : 'player';
  }
  displayRoundWinner(gameBoard);
  iterateScoreBoard(scoreBoard, gameBoard);
}

function choosesSquare(currentPlayer, gameBoard) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(gameBoard);
  } else {
    computerChoosesSquare(gameBoard);
  }
}

function playerChoosesSquare(gameBoard) {
  let square;
  while (true) {
    prompt (`Choose a square ${joinOr(emptySquares(gameBoard))}`);
    square = readline.question();
    if (emptySquares(gameBoard).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }
  gameBoard[square] = HUMAN_MARKER;
}

function joinOr(board, separator = ', ', joiningWord = 'or') {
  switch (board.length) {
    case 0: return '';
    case 1: return `${board[0]}`;
    case 2: return `${board[0]} ${joiningWord} ${board[1]}`;
    default:
      return board.slice(0, board.length - 1).join(separator) + `${separator}${joiningWord} ` + board[board.length - 1];
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function findPotentialSquare(line, gameBoard, marker) {
  let markersInLine = line.map(square => gameBoard[square]);
  if (markersInLine.filter(value => value === marker).length === 2) {
    let freeSquare = line.find(square => gameBoard[square] === INITIAL_MARKER);
    if (freeSquare !== undefined) {
      return freeSquare;
    }
  }
  return null;
}

function findOffensiveSquare(gameBoard) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findPotentialSquare(line,gameBoard, COMPUTER_MARKER);
    if (square) break;
  }
  return square;
}

function findDefensiveSquare(gameBoard) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findPotentialSquare(line, gameBoard, HUMAN_MARKER);
    if (square) break;
  }
  return square;
}

function findMiddleSquare(gameBoard) {
  let square;
  if (emptySquares(gameBoard).includes(`${MIDDLE_SQUARE}`)) {
    square = MIDDLE_SQUARE;
  }
  return square;
}

function findRandomSquare(gameBoard) {
  let square;
  let randomIndex = Math.floor(Math.random() * emptySquares(gameBoard).length);
  square = emptySquares(gameBoard)[randomIndex];
  return square;
}

function computerChoosesSquare(gameBoard) {
  let square;
  while (true) {
    square = findOffensiveSquare(gameBoard);
    if (square) break;
    square = findDefensiveSquare(gameBoard);
    if (square) break;
    square = findMiddleSquare(gameBoard);
    if (square) break;
    square = findRandomSquare(gameBoard);
    break;
  }
  gameBoard[square] = COMPUTER_MARKER;
}

function detectWinner(gameBoard) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      gameBoard[sq1] === HUMAN_MARKER &&
      gameBoard[sq2] === HUMAN_MARKER &&
      gameBoard[sq3] === HUMAN_MARKER
    ) {
      return 'player';
    } else if (
      gameBoard[sq1] === COMPUTER_MARKER &&
      gameBoard[sq2] === COMPUTER_MARKER &&
      gameBoard[sq3] === COMPUTER_MARKER
    ) {
      return 'computer';
    }
  }
  return null;
}

function isBoardFull(gameBoard) {
  return emptySquares(gameBoard).length === 0;
}

function displayRoundWinner(gameBoard) {
  switch (detectWinner(gameBoard)) {
    case 'player':
      prompt('You won this round!');
      break;
    case 'computer':
      prompt('The computer won this round.');
      break;
    default:
      prompt("It's a tie.");
  }
}

function iterateScoreBoard(scoreBoard, gameBoard) {
  if (detectWinner(gameBoard) === 'player') {
    scoreBoard.playerWins += 1;
  } else if (detectWinner(gameBoard) === 'computer') {
    scoreBoard.computerWins += 1;
  } else {
    scoreBoard.ties += 1;
  }
  scoreBoard.round += 1;
}

function displayMatchWinner(scoreBoard) {
  console.clear();
  console.log(LONG_LINE);
  console.log(centerString('MATCH OVER', LONG_LINE.length));
  console.log(LONG_LINE);
  if (scoreBoard.playerWins === WINS_NEEDED) {
    prompt(`Congratulations, you beat the computer in ${scoreBoard.round} rounds!`);
  } else {
    prompt(`The computer beat you in ${scoreBoard.round} rounds. Better luck next time.`);
  }
}

function getPlayAgain() {
  let playAgain;
  while (!validPlayAgain(playAgain)) {
    prompt('Would you like to play another match? y or yes for yes; n or no for no!');
    playAgain = readline.question().toLowerCase();
  }
  return playAgain;
}

function validPlayAgain(playAgain) {
  return ['y', 'yes', 'n', 'no'].includes(playAgain);
}

function displayGoodbyeMessage(matchesPlayed) {
  prompt(`Thank you for playing Tic Tac Toe! You played ${totalMatchesPlayed(matchesPlayed)}.`);
}

function totalMatchesPlayed(matchesPlayed) {
  return matchesPlayed === 1 ? `${matchesPlayed} match` : `${matchesPlayed} matches`;
}

displayWelcomeMessage();

let matchesPlayed = 0;
let playAgain = 'yes';

while (['y', 'yes'].includes(playAgain)) {

  if (matchesPlayed > 0) console.clear();
  let scoreBoard = initializeScoreBoard();
  let whoGoesFirst = getWhoGoesFirst();

  while (scoreBoard.playerWins < WINS_NEEDED &&
         scoreBoard.computerWins < WINS_NEEDED) {

    let gameBoard = initializeGameBoard();
    playRound(whoGoesFirst, gameBoard, scoreBoard);
    whoGoesFirst = (whoGoesFirst === 'player') ? 'computer' : 'player';
    readline.question("=> Press Enter/Return to continue...");

  }

  displayMatchWinner(scoreBoard);
  matchesPlayed += 1;

  playAgain = getPlayAgain();
}

displayGoodbyeMessage(matchesPlayed);