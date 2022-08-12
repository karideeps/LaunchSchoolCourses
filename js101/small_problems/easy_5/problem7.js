/*

Problem:
  Input: two arrays
  Output: array

Algorithm:
  define `multiplyList()` that takes `array1` and `array2` as arguments
    initialize `resultsArray` to []
    loop through index from 0 to array1 length
      multiply array1 and array2 at the index and push it to `resultsArray`
    return `resultsArray`

*/

function multiplyList(array1, array2) {
  let resultsArray = []
  for (let i = 0; i < array1.length; i += 1) {
    resultsArray.push(array1[i] * array2[i]);
  }

  return resultsArray
}

//Test cases:
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]