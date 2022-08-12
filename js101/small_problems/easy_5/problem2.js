/*

Problem:
  Input: two arrays
  Output: one array

Algorithm:
  define `union()` that takes `array1` and `array2` as arguments
    initialize `resultsArray` to [];
    iterate through all items in `array1` and add it to `resultsArray`
    iterate through all items in `array2`. 
      add item if it is not in results array

*/

function union(array1, array2) {
  resultsArray = [];
  array1.forEach(function (element) {
    resultsArray.push(element);
  });

  array2.forEach(function (element) {
    if (!resultsArray.includes(element)) {
      resultsArray.push(element);
    }
  })

  console.log(resultsArray);
}


// Test cases
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]