/*

Problem:
  Input: Number
  Output: String

Algorithm:
  define `timeOfDay()` that takes `number` as an element


*/

const DAYS_IN_WEEK = 7;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY
const MINUTES_IN_WEEK = MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_WEEK

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function timeOfDay(number) {
  if (number < 0) {
    number += MINUTES_IN_WEEK;
  }
  if (number > MINUTES_IN_WEEK) {
    number -= MINUTES_IN_WEEK;
  }

  dayIndex = Math.floor(number / MINUTES_IN_DAY);

  number = number % MINUTES_IN_DAY;

  let hour = Math.floor(number / MINUTES_IN_HOUR);

  let seconds = number % MINUTES_IN_HOUR;

  return (`${DAYS_OF_WEEK[dayIndex]} ${padder(hour)}:${padder(seconds)}`)

}

function padder(number) {
  if (number.toString().length === 1) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
}


// Test cases:

console.log(timeOfDay(-4231) === 'Thursday 01:29');
console.log(timeOfDay(0) === 'Sunday 00:00');
console.log(timeOfDay(1) === 'Sunday 00:01');
console.log(timeOfDay(-1) === 'Saturday 23:59');