/*

Problem:
  Input: Object
  Output: Number

Algorithm:
  get all the values from `age`
  sort the values from smallest to largest
  return element at index 0

*/



let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).sort()[0]);

console.log(Math.min(...Object.values(ages)));