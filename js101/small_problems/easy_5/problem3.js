/*

Input: array
Output: array with two nested arrays

Algorithm:
  define `halvsies()` that takes `array` as an input
    initialize `centre` to Math.floor(array.length/2)
    initialize `array1` to array.slice(0,centre);
    initialize `array2` to array.slice(centre);
    return array1 and array2 nested
*/

function halvsies(array) {
  centre = Math.ceil(array.length/2)
  let array1 = array.slice(0, centre);
  let array2 = array.slice(centre);


  return [array1, array2];
}




// Test cases:
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]