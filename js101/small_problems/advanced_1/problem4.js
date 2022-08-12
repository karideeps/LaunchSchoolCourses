/*

Problem:
  Input: array of array
  Output: array of array

Algorithm:
  define `rotate90` that takes `nestedArray` as an input
    declare `resultArray` and assign it []
    iterate though first `subArray` of `nestedArray`
      for each `element` in the `subArray`
        push [] to resultArray
    iterate through `subArray` and `outerIndex` in `nestedArray`
      itereate though `element` and `innerIndex` in `subArray`
        resulstArray[outerIndex][innerIndex] = element

*/

function rotate90(nestedArray) {
  let resultArray = [];

  nestedArray[0].forEach(function (element) {
    resultArray.push([]);
  });

  for (let j = 0; j < nestedArray.length; j += 1) {
    for (let i = 0; i < nestedArray[0].length; i += 1) {
      resultArray[i][j] = nestedArray[nestedArray.length - 1 - j][i];
    }
  }

  return resultArray;
}


// Test case

//     resultArray = [[],[],[],[]]

let matrix2 = [
  [3, 7, 4, 2],  // [0][1], [1][1], [2][1], [3][1] in resultArray
  [5, 1, 0, 8],  // [0][0], [1][0], [2][0], [3][0] in resultArray
];

let newMatrix2 = rotate90(matrix2);

console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]


let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let newMatrix1 = rotate90(matrix1);

let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]

console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]