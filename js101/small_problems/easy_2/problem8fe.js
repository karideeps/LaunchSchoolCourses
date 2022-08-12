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

function evenalities(array) {
  let evenArray = []
  array.forEach(function (element, index) {
    if (index % 2 === 1) {
      evenArray.push(element);
    }
  })
  return evenArray;
}

console.log(evenalities([1, 2, 3, 4, 5])); // logs[2, 4]
console.log(evenalities([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // logs [2, 4, 6, 8, 10]