const INITIAL_MARKER = ' ';


function initializeGameBoard() {
  let gameBoard = {};

  for (let square = 1; square <= 9; square += 1) {
    gameBoard[square.toString()] = INITIAL_MARKER;
  }

  return gameBoard;
}

let gameBoard = initializeGameBoard();

console.log(gameBoard);