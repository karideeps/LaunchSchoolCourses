/*

describe class `PerfectNumber`

  static `classify()`
    input: number
    output: error, or string

  if `number` is less than 0 throw error

  let divisours = []

  interate from 1 upto number `i`
    if number % `i` === 0 add it to `divisors`

  add divisors together

  if sum === number return 'perfect'
  if sum > number return 'abundant'
  if sum < number return 'deficient'

*/

const PerfectNumber = {
  classify(number) {
    if (number < 0) throw new Error;

    let divisors = [];

    for (let i = 1; i < number; i += 1) {
      if (number % i === 0) divisors.push(i);
    }

    let sum = divisors.reduce((a, b) => a + b);

    if (sum === number) return 'perfect';
    if (sum < number) return 'deficient';
    if (sum > number) return 'abundant';
  },
}

module.exports = PerfectNumber;