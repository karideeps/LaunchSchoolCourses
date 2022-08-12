/*

Problem:
  Input: array
  Output: array

Algorithm:
  filter `arr`
    loop through each `property` in object
      loop through each value in the propery
        if property is odd
          return false
        else
          return true

*/



/*
let newArr = arr.map(function (object) {

  let resultObject = {};

  for (let property in object) {
    if (object[property].every(num => num % 2 === 0)) {
      resultObject[property] = object[property];
    }
  }

  return resultObject

});

newArr = newArr.filter(object => Object.keys(object).length !== 0);
*/


/*

Problem:
  Input: array of objects
  Output: array of Objects

Algorithm:
  `filter` arr
    find all the values of the properties.
    iterate through outer array
      iterate though inner array
        if any is odd
          return false

*/


let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

newArr = arr.filter(function (object) {

  return Object.values(object).every(function (array) {

    return array.every(function (element) {
      return element % 2 === 0;
    })

  })

})




console.log(newArr) // => [ { e: [ 8 ], f: [ 6, 10 ] } ]
console.log(arr);