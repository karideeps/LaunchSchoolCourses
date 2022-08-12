let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];


/*

Loop through `innerarrays` in `arr`
  sort innerarray
    if type of innerarray[0] === 'number'
      number sort
    else
      sort


*/


let newArr =  arr.map(function (innerArray) {
  if (typeof innerArray[0] === 'number') {
    return innerArray.slice().sort((a, b) => Number(a) - Number(b))
  } else {
    return innerArray.slice().sort((a,b) => a.charCodeAt() - b.charCodeAt());
  };
})

console.log(arr);
console.log(newArr);