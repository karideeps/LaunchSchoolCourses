/*

Problem:
  Input: array of strings
  Output: output to console

Algorithm:
  define `countOccurrences()` that takes `array` as an argument
    initialize `returnObject` to {}
    iterate through all elements in `array`
      if returnObject has element
        returnObject[element] += 1
      else 
        returnObject[element] = 0
    
    iterate through keys in `returnObject`
      console.log key => value

*/

function countOccurrences(vehicles) {
  let returnObject = {};

  vehicles = vehicles.map(function (word) {
    return word.toLowerCase();
  })

  vehicles.forEach(function (element) {
    if (returnObject.hasOwnProperty(element)) {
      returnObject[element] += 1;
    } else {
      returnObject[element] = 1;
    }
  });

  for (let key in returnObject) {
    console.log(`${key} => ${returnObject[key]}`);
  }
}



let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv', 'SUv'];

countOccurrences(vehicles);

/*
console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/