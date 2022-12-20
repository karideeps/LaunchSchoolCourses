/*
declare class `RomanNumberal` that takes 1 argumnet `number`
  this.number = number

  toRoman()
    split `this.number` into an `arrayOfChars`
    transform each `char` into its full digit reperesentation
    transform each into a roman numberal
    join `transformedArray`

  numberToRoman(number) 
    // numbers will be 1000, 2000, 3000, 100, 200, ... 900, 10, 20, ...90, 1, 2, ...9
    transform numbers using an object look up

  static ROMAN_NUMERALS = {
    1: I
    2: II
    ...
    3000: MMM
  }
*/

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let arrayOfChars = String(this.number).split('');
    let arrayOfDigits = arrayOfChars.map((char, index, array) => {
      return char * (10 ** (array.length - index - 1));
    });
    return arrayOfDigits.map(this.numberToRomanNumeral)
                        .filter(element => element !== "''")
                        .join('');
                        ;
  }

  numberToRomanNumeral(number) {
    return RomanNumeral.ROMAN_KEY[number];
  }

  static ROMAN_KEY = {
    0: "''",
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400:  'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
  }
}

module.exports = RomanNumeral;