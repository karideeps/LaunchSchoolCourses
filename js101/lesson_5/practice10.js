let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];



let newArr = arr.map(function (array) {
  if (typeof array[0] === 'number') {
    return array.slice().sort((a, b) => Number(b) - Number(a))
  } else {
    return array.slice().sort((a, b) => b.charCodeAt() - a.charCodeAt())
  };
});


console.log(arr);
console.log(newArr);