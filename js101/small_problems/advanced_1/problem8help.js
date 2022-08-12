let Fraction = require('fraction.js');


let rationalNumber = new Fraction (2, 1);

console.log(rationalNumber);

let currentDenominator = 1;


if (1 / currentDenominator < rationalNumber.n / rationalNumber.d) {
  rationalNumber = new Fraction ((rationalNumber.n / rationalNumber.d) - (1 / currentDenominator))
}

console.log(rationalNumber);