/*

Problem:
  Input: number
  Output: number

Algorithm:
  define `sequence()` that takes `number as an argument
    initialize `resultsArray` to an empty array
    interate from 1 to number
      add index to `resultsArray`

*/
/*
function sequence(number) {

  let resultsArray = []
  for (i = 1; i <= number; i += 1) {
    resultsArray.push(i);
  }
  return resultsArray;
}
*/

/*
function sequence(number) {
  return ([...Array(number)].map(function (_, index) {
    return index + 1;
  }));
}
*/

function sequence(number) {
  let resultsArray = [];

  [...Array(number)].forEach(function (element, index) {
    resultsArray.push(index + 1);
  });

  return resultsArray;
}



// Test cases:
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]