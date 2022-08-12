let readline = require('readline-sync');

function getWhoGoesFirst() {
  let whoGoesFirst;
  do {
    console.log('Who will make the first move? p or player for player, c or computer for computer');
    whoGoesFirst = readline.question().toLowerCase();
  } while (!validWhoGoesFirst(whoGoesFirst));

  return whoGoesFirst[0] === 'p' ? 'player' : 'computer';
}

function validWhoGoesFirst(whoGoesFirst) {
  return ['p', 'player', 'c', 'computer'].includes(whoGoesFirst);
}

let whoGoesFirst = getWhoGoesFirst();

console.log(whoGoesFirst);