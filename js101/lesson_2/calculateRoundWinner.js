const WINS_AGAINST = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors'],
}


function calculateRoundWinner(playerChoice, computerChoice) {
  if (WINS_AGAINST[playerChoice].includes(computerChoice)) {
    return 'player';
  } else if (playerChoice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}





console.log(calculateRoundWinner('spock', 'rock'));