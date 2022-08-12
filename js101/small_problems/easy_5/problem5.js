/*

Problem:
  Input: two arrays
  Output: one array

Algorithm:
  define `interleave()` that takes `array1` and `array2` as arguments
    initialize `resultsArray` to []
    iterate indexes from 0 to array1.length exclusive
      push array1[index] to resultsArray
      push array2[index] to resutlsArray
    return resultsArray

*/
/*
function interleave(array1, array2) {
  let resultsArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    resultsArray.push(array1[i]);
    resultsArray.push(array2[i]);
  }
  return resultsArray;
}
*/

/*
function interleave(array1, array2) {
  let resultsArray = [];
  array1.forEach(function (element, index) {
    resultsArray.push(element, array2[index]);
  });
  return resultsArray;
}
*/

/*
function interleave(array1, array2) {
  return array1.map(function (element, index) {
    return [element, array2[index]];
  }).flat();
}
*/

function interleave(array1, array2) {
  return array1.reduce(function (previousValue, currentValue, currentIndex) {
    return previousValue.concat ([currentValue, array2[currentIndex]]);
  }, [])
}


// Test cases:
console.log(interleave([1, 2, 3], ['a', 'b', 'c'])) //[1, "a", 2, "b", 3, "c"]
