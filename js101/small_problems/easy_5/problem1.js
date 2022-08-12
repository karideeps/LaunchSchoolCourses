/*

Problem:
  Input: number 
    float between 0 and 360
  Output: string

Algorithm:
  define `dms()` that takes `number` as an argument
    intialize `degrees` number before decimal
    assign degrees of number to  `degrees` [use `parseInt()`]

    initialize `remianderNumber` = `number` - `degrees`

    initialize `minutes`

    remainderNumber = reamainderNumber * 60

    get `mintues` from praseInt(remainderNumber)

    remainderNumber = remainderNumber - minutes

        initialize `seconds` = remainderNumber * 60

    return concatenated strings
*/


function dms(number) {

  while (number >= 360) {
    number -= 360;
  }

  while (number < 0) {
    number += 360;
  }

  let degrees = parseInt(number);

  let remainderNumber = number - degrees;

  remainderNumber *= 60;

  minutes = parseInt(remainderNumber);

  remainderNumber = remainderNumber - minutes;

  remainderNumber *= 60;

  seconds = parseInt(remainderNumber);

  console.log(`${addZeroes(degrees)}°${addZeroes(minutes)}'${addZeroes(seconds)}"`)
}

function addZeroes(number) {
  if (number.toString().length === 1) {
    return `0${number}`;
  } else {
    return `${number}`;
  }

}

// Test cases:
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(361);
dms(-420);         // 300°00'00"