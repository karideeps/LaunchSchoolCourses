/*

Problem:
  Input: Object
  Output: Integer

Algorithm:
  get all the values from `ages`
  add values together using `reduce()`

*/


let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0));


