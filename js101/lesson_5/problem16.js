/*

Problem:
  Input: nested arrays
  Output: object

Algorithm:
  declare `reultsObject` to an empty object
  forEach array of items
    resultsObject.array[0] = array[1]


*/



let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let resultsObject = {};

arr.forEach(function (innerArray) {
  resultsObject[innerArray[0]] = innerArray[1]
});



// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }



let obj = Object.fromEntries(arr);
console.log(obj);
console.log(resultsObject);