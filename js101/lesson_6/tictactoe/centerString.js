/*

Problem:
  Input: string, line
  output: string

Algorithm:
  initialize `centreString()` that takes `string` and `lineWidth` as inputs
    declare beginningSpaces = (lineWidth - string.length) / 2
    return ' '.repeat(beginningSpaces) + string

*/




const LONG_LINE = '-'.repeat(80);

console.log(centerString('Game Over', LONG_LINE.length));