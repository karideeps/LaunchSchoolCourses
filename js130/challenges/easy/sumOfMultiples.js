/*
declare class `sumOfMultiples()`
  takes argument `setOfNumbers`
    if not `setOfNumbers` is given, then `setOfNumbers` = [3, 5]

  to() 
    declare `sum` and initialize it to `0`
    iterate from 1 (inclusive) to number (exclusive); `i`
      declare `isValidMultiple` and initialize it to `false`
      loop through `this.setOfNumbers`
        if (i % number === 0) `isValidMultiple = true;
      if isValidMultiple
        add i to `sum`
*/

function SumOfMultiples() {

  let setOfNumbers = Object.values(arguments);
  if (setOfNumbers.length === 0) {
    setOfNumbers = [3, 5];
  }

  if (!(this instanceof SumOfMultiples)) {
    return new SumOfMultiples(...setOfNumbers);
  }

  this.setOfNumbers = setOfNumbers;
}


SumOfMultiples.prototype.to = function(number) {
  let sum = 0;

  for (let i = 1; i < number; i += 1) {

    let isValidMultiple = false;

    this.setOfNumbers.forEach(number => {
      if (i % number === 0) isValidMultiple = true;
    });

    if (isValidMultiple) {
      sum += i;
    }

  }
  return sum;
}

SumOfMultiples.to = function(number) {
  return SumOfMultiples().to(number);
}

module.exports = SumOfMultiples;