/*

Problem:
  Input: object
  Output: object

Algorithm:
  define `selectFruit()` that takes `catalogue` as an argument
    initialize `resultsObject` to {}
    iterate through the keys of `catalogue`
      if value is fruit
        add key and value to `resultsObject`

*/

function selectFruit(catalogue) {
  let resultsObject = {};

  for (let nameOfProduce in catalogue) {
    if (catalogue[nameOfProduce] === 'Fruit') {
      resultsObject[nameOfProduce] = 'Fruit';
    }
  }

  return resultsObject;
}


// Test cases:
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce);