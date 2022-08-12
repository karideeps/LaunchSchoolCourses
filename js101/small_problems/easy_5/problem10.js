/*

Problem:
  Input: array
  Output: number

Algorithm:
  define `average()` that takes `array` as an input
    reduce array to the sum of all numbers
    divide this number by array.length
    round it down (Math.floor)
*/

function average(array) {
  let sum = 0
  array.forEach(function (element) {
    sum += element;
  })

  return Math.floor(sum / array.length);
}

/*
function average(array) {
  let averageNumber = array.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  })

  averageNumber = Math.floor(averageNumber / array.length);

  return averageNumber;
}
*/


// Test cases:
console.log(average([1, 5, 87, 45, 8, 8]) === 25);
console.log(average([9, 47, 23, 95, 16, 52]) === 40);