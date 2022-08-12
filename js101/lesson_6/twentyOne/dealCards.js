const readline = require('readline-sync');

let deck = [['A', '10'], ['K', '5'], ['C', '7']];


function dealCards(targetHand, cardsToDeal, deck) {
  for (let i = 1; i <= cardsToDeal; i += 1) {
    targetHand.push(deck.pop())
  }

}


let playersHand = [['S', '10']];

dealCards(playersHand, 2, deck)

console.log(playersHand);
console.log(deck);

function pressEnterToContinue() {
  console.log('=> Press Enter or Return to continue')
  readline.question();
}

pressEnterToContinue();