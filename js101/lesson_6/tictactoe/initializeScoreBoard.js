function initializeScoreBoard() {
  return {
    round: 0,
    playerWins: 0,
    computerWins: 0,
    ties: 0,
  }
}

let scoreBoard = initializeScoreBoard();



scoreBoard.round += 1;
scoreBoard.playerWins += 1;

console.log(scoreBoard);