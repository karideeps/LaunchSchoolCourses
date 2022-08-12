/* 

Problem:
  Input: array
  Output: same array

Algorithm:
  define `reverse()` that takes `array` as an argument
    create `newArray` that is a reverse of `array`
    iterate through the indexes of array
      resassign each element to the corresponding one from `newArray`

*/

function reverse(array) {
  newArray = array.slice();

  for (let index = 0; index < array.length; index += 1) {
    array[index] = newArray[(array.length - 1) - index]
  }

  return(array);

}



// Test cases:
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true