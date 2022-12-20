/*

declare class `Scrabble` that takes a `string` and `null`

  static VALUES = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
    2: ['d', 'g']
    3: ['b', 'c', 'm', 'p']
    4: ['f', 'h', 'v', 'w', 'y']
    5: ['k']
    8: ['j', 'x']
    10: ['q', 'z']
  }

  score()
    declare `score` and initialize it to 0
    if this.word === null return `score`
    iterate through each `char` in `this.word`
      iterate through each `value` in `Scrabble.VALUES`
        if `Scrabble.Values[value].includes(char)`
          score += Number(value);

    return `score`
*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static VALUES = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'z'],
  }

  score(word) {
    let score = 0;
    if (!word) word = this.word;
    if (word === null) return score;

    [].forEach.call(word, char => {
      for (let value in Scrabble.VALUES) {
        if (Scrabble.VALUES[value].includes(char.toLowerCase())) {
          score += Number(value);
        }
      }
    });

    return score;
  }

  static score = Scrabble.prototype.score;
}

module.exports = Scrabble;