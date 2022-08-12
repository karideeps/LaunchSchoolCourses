/*

Problem:
  Input: integer
  Output: string

Algorithm:
  define `timeOfDay()` that takes `number` as an argument
    while number is > MINUTES_IN_DAY
      number -= MINUTES_IN_DAY
    while number is < 0
      number += MINUTES_IN_DAY

    hours = Math.floor(number / MINUTES_IN_HOUR)
    seconds =  Math.floor (number % MINUTES_IN_HOUR)

    padstring
      if length is <2, return 0 + string
      else return string
*/

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function timeOfDay(number) {
  while (number > MINUTES_IN_DAY) {
    number -= MINUTES_IN_DAY;
  }

  while (number < 0) {
    number += MINUTES_IN_DAY;
  }

  let hours = Math.floor(number / MINUTES_IN_HOUR);
  let seconds = Math.floor(number % MINUTES_IN_HOUR);

  return `${padder(hours)}:${padder(seconds)}`


}

function padder(time) {
  if (time.toString().length === 1) {
    return `0${time}`;
  } else {
    return time.toString();
  }
}

// Test cases:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

console.log(padder(0));
console.log(padder(10));