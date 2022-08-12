/*

Problem:
  Input: Array
  Output: new array

Algorithm:
  define `rotateArray()` that takes `array` as an argument
    if `array` is not an array return undefined
    if `array` is empty (.length === 0) return empty array

    create a shallow copy of the array and assign it to `copyArray`
    remove first element of copyArray
    add it to end of copyArray
    return copyArray

*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let copyArray = array.slice();

  return copyArray.concat(copyArray.shift());


}



// Test cases:
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]