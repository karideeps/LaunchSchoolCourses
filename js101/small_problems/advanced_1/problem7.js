/*

Problem:
  Input: Array, string
  Output: Number
  
Algorithm:


*/

function binarySearch(array, searchTerm) {
  let resultIndex = 0;
  let workingArray = array.slice();
  let middleIndex;

  while (true) {

    middleIndex = Math.floor(workingArray.length/2);

    if (workingArray[middleIndex] === searchTerm) {
      return resultIndex + middleIndex;
    }

    if (middleIndex === 0 && workingArray[middleIndex] !== searchTerm) {
      return -1;
    }

    if (searchTerm > workingArray[middleIndex]) {
      let lowerHalf = workingArray.slice(0, middleIndex + 1);
      resultIndex += lowerHalf.length;
      workingArray = workingArray.slice(middleIndex + 1, workingArray.length);
    } else {
      workingArray = workingArray.slice(0, middleIndex);
    }
  }

}

// Test cases:


let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(binarySearch(array, 15) === 15);

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria') === 7);
console.log(binarySearch(yellowPages, 'Apple Store') === 0);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77) === -1);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89) === 7);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5) === 1);
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter') === -1);
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler') === 6);