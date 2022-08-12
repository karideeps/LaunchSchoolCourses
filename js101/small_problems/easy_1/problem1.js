/*

Problem:
  Input: Integer
    Positive, negative, or zero
  Output: Boolean

Algorithm:
  Check if argument is odd `interger % 2`
  Return `true` if above expression does NOT equal 0

*/

function isOdd(integer) {
  return integer % 2 !== 0;
}



// Test cases:
console.log((isOdd(2)) === false);
console.log((isOdd(5)) === true);
console.log((isOdd(-17)) === true);
console.log((isOdd(-8)) === false);
console.log((isOdd(0)) === false);
console.log((isOdd(7)) === true);