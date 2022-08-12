/*

transform outer array
  filter inner array
    select only elements that are mulitples of 3

*/



let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(function(innerArray) {
  return innerArray.filter(function (element) {
    return element % 3 === 0
  })
})


console.log(newArr);
console.log(arr);
