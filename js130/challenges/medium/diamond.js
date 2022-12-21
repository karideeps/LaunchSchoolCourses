class Diamond {

  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let resultArray = [];
    let letterIndex = Diamond.LETTERS.indexOf(letter);
    resultArray.push(this.letterAndInnerSpace(letterIndex));
    
    for (let i = 1; i <= letterIndex; i += 1) {
      let indexOfNextLetter = letterIndex - i;
      let spaces = ' '.repeat(i);
      let letterLine = `${spaces}${this.letterAndInnerSpace(indexOfNextLetter)}${spaces}`;
      resultArray.push(letterLine);
      resultArray.unshift(letterLine);
      
    }
    return resultArray.map(line => line += `\n`).join('');
  }

  static letterAndInnerSpace(letterIndex) {
    let letter = Diamond.LETTERS[letterIndex];
    if (letterIndex === 0) return letter;
    return `${letter}${' '.repeat(2 * letterIndex - 1)}${letter}`;
  }
}

module.exports = Diamond;
