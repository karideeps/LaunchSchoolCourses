/*

Problem:
  Input: Integer
  Output: string

Algorithm:
  define `century()` that takes `year` as an input
    concatenate centuryNumber() + ending(centuryNumber(century))

  define `centuryNumber()` that takes`year` as input

  define `ending()` that takes `year` as input

*/

function century(year) {
  return `${centuryNumber(year)}${ending(centuryNumber(year))}`;
}

function centuryNumber(year) {
  return Math.ceil(year/100);
}

function ending(century) {
  switch(century.toString().slice(-2)) {
    case '11': return 'th';
    case '12': return 'th';
    case '13': return 'th';
  }

  switch(century.toString().slice(-1)) {
    case '1': return 'st';
    case '2': return 'nd';
    case '3': return 'rd';
    default: return 'th';
  }
}
// Test cases:
// console.log(century(2000) === "20th");
// console.log(century(2001) === "21st");
// console.log(century(1965) === "20th");
// console.log(century(256) === "3rd");
// console.log(century(5) === "1st");
// console.log(century(10103) === "102nd");
// console.log(century(1052) === "11th");
// console.log(century(1127) === "12th");
// console.log(century(11201) === "113th");

console.log(century(11001003));
console.log(century(11001103));
console.log(century(11001203));


// console.log(centuryNumber(5) === 1);
// console.log(centuryNumber(100) === 1);
// console.log(centuryNumber(101) === 2);
// console.log(centuryNumber(2000) === 20);
// console.log(centuryNumber(2001) === 21);


// console.log(ending(11) === 'th');
// console.log(ending(12) === 'th');
// console.log(ending(13) === 'th');
// console.log(ending(14) === 'th');
// console.log(ending(21) === 'st');
// console.log(ending(32) === 'nd');
// console.log(ending(33) === 'rd');
// console.log(ending(133) === 'rd');
// console.log(ending(1) === 'st');
// console.log(ending(2) === 'nd');
// console.log(ending(3) === 'rd');
// console.log(ending(4) === 'th');