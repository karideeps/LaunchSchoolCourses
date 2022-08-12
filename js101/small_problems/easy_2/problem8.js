/*

Problem:
  Input: Array
  Output: Array

Algorithm:
  Initialize `newArray` to an empty array
  Iterate through the index of the array from 0 to array.legnth - 1
    for ever EVEN index add it to `newArray`
  return `newArray`
*/

function oddities(array) {
  let newArray = []
  for (let i = 0; i<array.length; i+= 2) {
    newArray.push(array[i]);
  }
  return newArray;
}


// Test case:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
