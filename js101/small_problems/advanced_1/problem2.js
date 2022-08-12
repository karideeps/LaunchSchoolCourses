/*

Problem:
  Input: Array of arrays
  Output: new Array of arrays

Algorithm:
  define `transpose()` that takes `nestedArray` as an argument
    declare `resultArray` and assign to it `[[],[],[]]`

    iterate through each `innerArray` in `nestedArray`
      iterate through each `element` and `index` in  `innerArray`
        resultsArray[index].push(element);
    return `resultsArray`

*/

function transpose(nestedArray) {
  let resultArray = [];

  nestedArray.forEach(function (_) {
    resultArray.push([]);
  });


  nestedArray.forEach(function (innerArray) {
    innerArray.forEach(function (element, index) {
      resultArray[index].push(element);
    });
  });

  return resultArray;
}




// Test cases:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]