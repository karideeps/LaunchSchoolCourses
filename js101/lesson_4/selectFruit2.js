/*

Problem:
  Input: object
  Output: array

Algorithm:
  define `selectVegetable()` that takes `catalogue` as an argument
    split catalogue into an array of keyvalue pairs
    iterate through the new array
      if elementArray[1] === 'vegetable' select it

*/


function selectVegetables(catalogue) {
  return Object.fromEntries(Object.entries(catalogue).filter(elementArray => elementArray[1] === 'Vegetable'));
}







// Test cases:

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectVegetables(produce));
