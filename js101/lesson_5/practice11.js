let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];



/*

loop each object in the array
  declare`returnObject` and assign it an empty object
  loop through each property in the object
    add the key and value += 1 to another object
  return new object


*/


let newArr = arr.map(function (object) {
  let returnObject = {};
  for (let letter in object) {
    returnObject[letter] = object[letter] + 1;
  }
  return returnObject;
})

console.log(newArr);
console.log(arr);