/*

Problem:
  Input: Array
  Output: Array

Algorithm:
  define `bubbleSort()` that takes `array` as an input
    declare `swapBoolean` and initialize it to `true`


    compare [0] and [1]
      if [0] > [1] 
        swap [0] and [1]
        continue
    compare [1] and [2]
      if [1] > [2]
        swap [1] and [2]
        continue
    repeat until [array.length - 2] and [array.length - 1]

    swap = 'false'

    repeat entire process until NO swap is made


*/

function bubbleSort(array) {

  do {

    arrayString = array.join('');

    for (let i = 0; i < array.length - 1; i+= 1) {

      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }

    }


  } while (array.join('') !== arrayString)

}


// Test cases:
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]