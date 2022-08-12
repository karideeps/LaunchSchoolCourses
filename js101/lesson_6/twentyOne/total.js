/*

Problem:
  Input: array of arrays
  Output: number

Algorithm:
  define `total()` that takes `hand` as an input
    transform hand into an `arrayOfcards`
    let numberOfAces = conut the number of `A`
    transform `arrayOfCards` into an `arrayOfValues`
    let sum = reduce `arrayOfValues`

    while (`arrayOfValues` is > BUSTED && numberOfAces > 0)
      sum -= 10
      numberOfAces -= 1;
*/

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
  A: 11 // or 1
};

const MAX_TOTAL = 21;

let computersHand = [['A', 'C'], ['2', 'S']];

function total(hand) {
  let arrayOfCards = hand.map(card => card[0])
  let numberOfAces = arrayOfCards.filter(card => card === 'A').length;
  let arrayOfValues = arrayOfCards.map(card => CARDS_AND_VALUES[card]);
  let sum = arrayOfValues.reduce((sum, currentValue) => sum + currentValue);

  while (sum > MAX_TOTAL && numberOfAces > 0) {
    sum -= 10;
    numberOfAces -= 1;
  }

  return sum;
}

console.log(total(computersHand));