/*

sort `arr`
  let sumOfA =  sum of odd numbers in a
  let sumOfB = find sum of odd numbers in b

  return a - b
*/



let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a,b) => {
  let sumOfA = a.reduce(function (accumulator, currentValue) {
    if (currentValue % 2 === 1) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0)

  let sumOfB = b.reduce(function (accumulator, currentValue) {
    if (currentValue % 2 === 1) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0)

  return sumOfA - sumOfB;
});


console.log(arr);