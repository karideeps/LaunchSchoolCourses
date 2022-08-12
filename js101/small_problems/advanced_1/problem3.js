/*

Problem:
  Input: Array of arrays
  Output: array of arrays

Algorithm:
  define `transpose()` that takes `nestedArray` as an argument
    declare `resultArray` and assign it an empty array
    for each element of the first array in `nestedArray`
      push [] to `resultArray`
    iterate through `subArray` and `outerIndex` in `nestedArray`
      iterate through `element` and `innerIndex` in `subArray`
        plush element to `resultArray[innerIndex][outerIndex]
    return `resultArray`

*/


function transpose(nestedArray) {
  let resultArray = [];

  nestedArray[0].forEach(function (element) {
    resultArray.push([]);
  })

  nestedArray.forEach(function (subArray, outerIndex) {
    subArray.forEach(function (element, innerIndex) {
      resultArray[innerIndex][outerIndex] = element;
    });
  });

  return resultArray;
}



// Test cases:
const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

// transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
// transpose([[1]]);                     // [[1]]

// transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]