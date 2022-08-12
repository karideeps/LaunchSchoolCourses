/*

Problem
  Input: number
  Output: number

Algorithm:
  define `fridayThe13ths()` that takes `year` as an argument
    declare `startingDate` and set it equal to jan 1, ${year}
    declare `counter` and assign 0 to it;
    while full year of the date === year
      if getDay === 5 && getMonth === 13
        counter += 1
        date = date.valueOf() + MILISECONDS
    return `counter




    `getDay()` // => returns day of the week (0 - 6)
    'getDate()` // => return day of the month (1 - 31)

*/

const MILISECONDS_IN_DAY = 86400000;

function fridayThe13ths(year) {
  let startingDate = new Date(`Jan 1, ${year}`);
  let counter = 0;


  while (startingDate.getFullYear() === year) {
    if (startingDate.getDay() === 5 && startingDate.getDate() === 13) {
      counter += 1
    }
    startingDate = (new Date (startingDate.valueOf() + MILISECONDS_IN_DAY))
  };

  return counter;
}




// Test cases:
console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);