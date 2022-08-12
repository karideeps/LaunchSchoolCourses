/*

Problem:
  Input: string
  Output: number

Algorithm:
  define `afterMidnight()` that takes `time` as an argument
    split time into an array of strings
    convert each element into a number
    add the two elements together
      first element * 60 + second element
  
  define `beforeMidnight()` that takes `time` as an argument
    split time itno an array of strings
    convert each element into a number
    add the two elements together
      first * 60 + second
    subtract this from 1440

*/

function afterMidnight(time) {
  let array = time.split(':').map(element => Number(element));

  return (((array[0] * 60) + array[1])) % 1440
}

function beforeMidnight(time) {
  let array = time.split(':').map(element => Number(element));

  return (1440 - ((array[0] * 60) + array[1])) % 1440
}





// Test cases:
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);