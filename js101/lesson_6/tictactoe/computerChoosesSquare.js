const INITIAL_MARKER = ' ';

const HUMAN_MARKER = 'X';

const COMPUTER_MARKER = 'O';

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

const MIDDLE_SQUARE = 5;

let gameBoard = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
};

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

console.log(computerChoosesSquare(gameBoard));
console.log(gameBoard);

