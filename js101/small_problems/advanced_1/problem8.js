/*

Problem:
  Input: rational number
  Output: array of numbers

Algorithm:
  define `egyptian()` that takes `arrayOfDenominators` as an argument
    until egyptian sum of `resultArray` === `arrayOfDenominators`
      keep adding to resultArray

*/

/*

Problem:
  Input: array of numbers
  Output: integer

Algorithm:
  define `unegyptian()` that takes `arrayOfDenominators` as an input
    reduce `arrayOfDenominators` into a single number
      accumulator + 1/element

*/

let Fraction = require('fraction.js');

function egyptian(rationalNumber) {

  let remainingRational = rationalNumber;
  arrayOfDenominators = [];

  let currentDenominator = 1;

  do {
    if (1 / currentDenominator <= remainingRational.n / remainingRational.d) {
      arrayOfDenominators.push(currentDenominator);
      remainingRational = new Fraction ((remainingRational.n / remainingRational.d) - (1 / currentDenominator));
    }
    currentDenominator += 1

  } while (unegyptian(arrayOfDenominators) !== (rationalNumber.n / rationalNumber.d))

  return arrayOfDenominators
}

function unegyptian(arrayOfDenominators) {
  return arrayOfDenominators.reduce(function (accumulator, currentValue) {
    return accumulator + new Fraction (1 / currentValue);
  }, 0);
}




// Test 
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]


