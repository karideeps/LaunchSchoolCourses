/*

Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Problem:
  Input: two arrays
  Output: one array

Algorithm
  define `merge()` that takes `array1` and `array2` as arguments
    if array2.length === 0; return array1
    if array1.length === 0; return array2
   
    declare `resultArray` to and assign it `[]`
    declare `copyOfArray2` and assign it a copy of `array2` (.slicde)
    
    iterate through all the elements of array1
      while element of array1 > `copyOfArray2[0]`
        remove first element of copyOfArray2 and add it to `resultArray`
      push element of array1 to `resultArray`



*/


function merge(array1, array2) {
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;
  
  let resultArray = [];
  let copyOfArray2 = array2.slice();
  
  array1.forEach(function (element) {
    while (element > copyOfArray2[0]) {
      resultArray.push(copyOfArray2.shift());
    }
    resultArray.push(element);
  });
  
  return resultArray.concat(copyOfArray2);
}




// Test cases:
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1, 5],[2, 6, 8]))