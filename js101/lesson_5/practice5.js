let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};


/*

Get values of `musters` as an array of objects
reduce the array of objects
  if element.gender is male
    add age to accumulator


*/

let answer = Object.values(munsters).reduce(function (accumulator, currentValue) {
  if (currentValue.gender === 'male') {
    return accumulator + currentValue.age;
  } else {
    return accumulator;
  }
}, 0)

console.log(answer);

let answer2 = Object.values(munsters).filter(object => object.gender === 'male').reduce((accumulator, currentValue) => { return accumulator + currentValue.age}, 0)

console.log(answer2);