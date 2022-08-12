/*

Problem:
  Input: array
  Output: string

Algorithm:
  define `multiplicativeAverage()` that takes `array` as an argument
    initialize `product` and assign it to the product all all integers in the array
      use reduce
    initialize `average` to to product / length of `array`
    round `average` to 3 decimal places

*/

function multiplicativeAverage(array) {
  let product = array.reduce (function (previousValue, currentValue) {
    return previousValue * currentValue;
  });

  let average = product / array.length;

  return average.toFixed(3);
}



// Test cases:
console.log(multiplicativeAverage([3, 5]) === "7.500");
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]) === "28361.667");