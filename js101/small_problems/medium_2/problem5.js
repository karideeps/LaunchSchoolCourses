/*

Problem:
  Input: Number
  Output: Number

Algorithm:
  define `featured()` that takes `number` as an argument
    declare `testNumber` and assign the value of `number` to it
    while testNumber is less than or equal to 9876543210
      increment `testNumber` by 1
      if `testNumber` % 7 === 0 AND

      all digits in `testNumber` are unique // Make this a function
        convert `testNumber` into a string
        split `testNumber` into an arrayOfChars
        if arrayOfchars.slice(1) include arrayOfChars[0]
          return false
        else true

      return testNumber

*/


function featured(number) {
  let testNumber = number;
  while (testNumber <= 9876543201) {
    testNumber += 1;
    if (testNumber % 7 === 0 && testNumber % 2 === 1 && isAllNumbersUnique(testNumber)) {
      return testNumber;
    }
  }
  return "There is no possible number that fulfills those requirements.";
}


function isAllNumbersUnique(number) {
  let arrayOfChars = number.toString().split('');
  for (let i = 0; i < arrayOfChars.length; i += 1) {
    if (arrayOfChars.slice(i + 1).includes(arrayOfChars[i])) {
      return false;
    }
  }

  return true;
}

console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543186) === 9876543201);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543201) === "There is no possible number that fulfills those requirements.");


// console.log(isAllNumbersUnique(1234));
// console.log(isAllNumbersUnique(1214));
// console.log(isAllNumbersUnique(123456890));
// console.log(isAllNumbersUnique(1234568905));
// console.log(isAllNumbersUnique(133));