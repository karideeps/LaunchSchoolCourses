/*

Problem:
  Input: nested array
  Output: array

Algorithm:
  define `buyFruit()` that takes `nestedArray` as an input
    transform each array to a string with 3 names

*/

function buyFruit(nestedArray) {
  let resultArray = [];
  nestedArray.forEach(element => {
    for (let i = 0; i < element[1]; i += 1) {
      resultArray.push(element[0]);
    }
  });
  return resultArray;
}



// Test cases:
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]



/* 

input ['apple' , 3]
output 'apple', 'apple', 'apple'


*/