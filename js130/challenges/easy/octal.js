/*
declare class `Octal`
  takes a string argument `number`
  this.number = number

  toDecimal()
    if isValidOctal(this.number)
      split `this.number` into an array of chars
      reduce array of Chars using `element`, `index`, `array`
        Number(element) * 8 ** (array.length - index)
    else
      return 0

  isValidOctal(string) {
    split `this.number` into an array of chars
    every `char` in `arrayOfChars` is between 0 to 7 inclusive.
  }

*/

class Octal {
  constructor(number) {
    this.number = number;
  }

  toDecimal() {
    if (this.isValidOctal(this.number)) {
      return this.number.split('')
                        .reduce(this.calculateOctalReduceCallback, 0)
    } else {
      return 0
    }
  }

  isValidOctal(string) {
    return [].every.call(string, char => {
      return '01234567'.includes(char);
    })
  }

  calculateOctalReduceCallback(accumulator, currentValue, index, array) {
    return accumulator + (currentValue * (8 ** (array.length - index - 1)))
  }
}

module.exports = Octal;