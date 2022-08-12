const SUITS = {
  heart: '\u2665',
  clubs: '\u2663',
  spaces: '\u2660',
  diamonds: '\u2666',
}

const CARDS_AND_VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 11
}


function initializeDeck() {
  let deck = [];
  Object.keys(SUITS).forEach(suit => {
    Object.keys(CARDS_AND_VALUES).forEach (card => {
      deck.push({face: card, suit: SUITS[suit]});
    });
  });
  return deck;
}

function shuffleDeck(deck) {
  for (let currentIndex = 0; currentIndex < deck.length; currentIndex += 1) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
  }
}

/*
Problem:
  Input: Array or arrays
  Output: undefined
  Side effect: mutate original array

Algorithm:
  define `shuffleDeck()` that takes `deck`(array) as an element
    for each `card` and `indexOfcurrentCard` in the deck
      get a random index between 0 and 51 Math.floor(Math.random()* deck.length -1)
      switch card at random index with current card

*/

let deck = initializeDeck();
//shuffleDeck(deck);
console.log(deck);
