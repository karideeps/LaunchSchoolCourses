/*

Problem:
  Input: Array of arrays
  Output: Array of arrays

Algorithm:
  define `transpose()` that takes `nestedArray` as an argument
    switch values of
      [0][0], [0][1], [0][2], [1][1], [1][2], [2][2]
      [0][0], [1][0], [2][0], [1][1], [2][1], [2][2]




*/

function transpose(nestedArray) {
  for (let row = 0; row < nestedArray.length; row += 1) {
    for (let column = row; column < nestedArray.length; column += 1) {
      [nestedArray[row][column], nestedArray[column][row]] = [nestedArray[column][row], nestedArray[row][column]];
    }
  }

  return nestedArray;

}




// Test cases:
let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]