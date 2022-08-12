function displayPlayersHand(playersHand) {
  playersHand = playersHand.map(card => card.join(''))
  console.log(joinOr(playersHand));
}

function displayComputersHand(computersHand, status = 'shown') {
  computersHand = computersHand.map(card => card.join(''));
  if (status === 'hidden') computersHand[computersHand.length - 1] = 'unknown';
  console.log(joinOr(computersHand));
}

function joinOr(array) {
  if (array.length === 0 ) return '';
  if (array.length === 1) return array[0];
  if (array.length === 2) return `${array[0]} and ${array[1]}`;

  let firstPart = array.slice(0, array.length - 1).join(', ');
  let secondPart = array.slice(array.length - 1, array.length);

  return `${firstPart} and ${secondPart}`;
}


let computersHand = [['10', 'S'], ['J', 'D'], ['K','C']];
displayComputersHand(computersHand);
console.log(computersHand);