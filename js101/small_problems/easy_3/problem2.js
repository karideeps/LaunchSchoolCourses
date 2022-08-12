/*

Problem:
  Input: string
  Output: 5 lines of string

Algorithm:
  initilize `logInBox()` that takes `string` as a parameter
    initialize `lineOneAndFive` to an empty string
      add'+-'
      for length of `string` add '-'
      add'-+'
    initizlie `lineTwoAndFour` to an empty string
      add '| '
      for length of `string` add ' '
      add ' |'
    initizlie `lineThree`
      add '| '
      add `string`
      add ' |'

    return concatenated strings oneandfive + twoandfour + three + twoandfour + oneandfive
*/

function logInBox(string, maximumLength) {
  
  if (!string.length <= maximumLength) {
    string = string.slice(0, maximumLength);
  }
  
  let lineOneAndFive = '+-';
  for (let i = 0; i < string.length; i += 1) {
    lineOneAndFive += '-';
  }
  lineOneAndFive += '-+';

  let lineTwoAndFour = '| ';
  for (let i = 0; i < string.length; i += 1) {
    lineTwoAndFour += ' ';
  }
  lineTwoAndFour += ' |';

  let lineThree = `| ${string} |`

  console.log(`${lineOneAndFive}\n${lineTwoAndFour}\n${lineThree}\n${lineTwoAndFour}\n${lineOneAndFive}`);
}





// Test case:
logInBox('', 5)
logInBox('To boldly go where no one has gone before.', 100);
logInBox('this is a very very very very very very long line, it is so unbelievably long.', 100)
