# 1
```javascript
function filter(array, callback) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) filteredArray.push(array[i]);
  }
  return filteredArray;
}


let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // []
console.log(filter(numbers, () => true)); // [1, 2, 3, 4, 5];
let values = [1, 'abc', null, true, undefined, 'xyz'];
console.log(filter(values, value => typeof value === 'string')); // ['abc', 'xyz]
```

# 2
```javascript
function map(array, callback) {
  let transformedArray = [];
  for (let i = 0; i < array.length; i += 1) {
    transformedArray.push(callback(array[i]));
  }
  return transformedArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3)); // [3, 6, 9, 12, 15]
console.log(map(numbers, number => number + 1)); // [2, 3, 4, 5, 6]
console.log(map(numbers, () => false)); // [false, false, false, false, false]

let values = [1, 'abc', null, true, undefined, 'xyz'];
console.log(map(values, value => String(value))); // ['1', 'abc', 'null', 'true', 'undefined', 'xyz'];
```

# 3
```javascript
function reduce(array, callback, initialValue) {
  let startingIndex;
  let accumulator;

  if (initialValue) {
    accumulator = initialValue;
    startingIndex = 0;
  } else {
    accumulator = array[0];
    startingIndex = 1;
  }

  for (let i = startingIndex; i < array.length; i += 1) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number)); // 15
console.log(reduce(numbers, (prod, number) => prod * number)); // 120
console.log(reduce(numbers, (prod, number) => prod * number, 3)); // 360
console.log(reduce([], (accum, number) => accum + number, 10)); // 10
console.log(reduce([], (accum, number) => accum + number)); // undefined

let stooges = ['Mo', 'Larry', 'Curly'];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, [])); // ['Curly', 'Larry', 'Mo']
```

# 4
```javascript
function filter(array, callback) {
  return array.reduce(function(accumulator, currentValue) {
    if (callback(currentValue)) accumulator.push(currentValue);
    return accumulator;
  }, [])
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // [4, 5]
console.log(filter(numbers, number => number < 0)); // []
console.log(filter(numbers, () => true)); // [1, 2, 3, 4, 5]

let values = [1, 'abc', null, true, undefined, 'xyz'];
console.log(filter(values, value => typeof value === 'string')); // ['abc', 'xyz]
```

# 5
```javascript
function map(array, callback) {
  return array.reduce((accumulator, currentValue) => {
    accumulator.push(callback(currentValue));
    return accumulator;
  }, [])
}


let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, function(number) {
  return number * 3
})); // [3, 6, 9, 12, 15]
console.log(map(numbers, number => number += 1)); // [2, 3, 4, 5, 6]
console.log(map(numbers, () => false));

let values = [1, 'abc', null, true, undefined, 'xyz'];
console.log(map(values, value => String(value))); // ['1', 'abc', 'null', 'true', 'undefined', 'xyz']
```

# 6
```javascript
function objForEach(object, callback) {
  for (let prop in object) {
    callback(prop, object[prop]);
  }
}

let obj = { foo: 1, bar: 2, qux: 3 };
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});

/*
the value of foo is 1
the value of bar is 2
the value of qux is 3
*/
```