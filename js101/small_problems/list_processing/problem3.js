/*

Problem:
  Input: two arrays
  Output: one array

Algorithm:
  define `multiplyAllPairs()` takes `array1` and `array2` as arguments
    initialize `reultsArray` to an empty array
    loop through array1
      loop thorugh array 2
        mulitply element from array 1 and element from array 2
          add this to `resultsArray`
    return `resultsArray` sorted

*/

function multiplyAllPairs(array1, array2) {
  let resultsArray = [];

  array1.forEach(element => {
    array2.forEach(secondElement => {
      resultsArray.push(element * secondElement);
    });
  });

  return resultsArray.sort(sortFunction);
}

function sortFunction(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}


// Test cases:
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]