/*

Problem:
  Input: array
  Output: array

Algorithm:
  define `mergeSort()` that takes `array` as an input
    if `array.length` === 1 return array

    call mergesort on first half of array and second half of array

*/



function mergeSort(array) {
  if (array.length === 1) return array;

  let middleIndex = Math.floor(array.length / 2);

  let firstHalf = array.slice(0, middleIndex);
  let secondHalf = array.slice(middleIndex, array.length)

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));

}

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

console.log(mergeSort([1, 2, 3, 4, 5, 6 ]));
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]