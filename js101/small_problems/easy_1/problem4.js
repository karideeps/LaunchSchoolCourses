/*

Problem:
  Input: 
    Get input from user
    Two strings
  Output:
    String
  Rules:
    The string input needs to be multiplied together.

Algorithm:
  Get `length` from user
  Get `width` from user
  Convert `length` and `width` into numbers
  Multiply them together and store the value under `areaInMeters`
  Convert `areaInMeteres` to `areaInFeet` using the provided conversion
  Display `areaInMeters` and `areaInFeet` using string interpolation

*/

let readlineSync = require('readline-sync');

const SqMetersToSqFeet = 10.7639;

console.log("What type of unit would you like to use? feet or meters?")
let unit = readlineSync.prompt();

let length = Number(readlineSync.question(`Enter the length of the room in ${unit}:\n`));

let width = Number(readlineSync.question(`Enter the width of the room in ${unit}:\n`));

let areaInMeters;

let areaInFeet;

if (unit === "meters") {
  areaInMeters = length * width;

  areaInFeet = areaInMeters * SqMetersToSqFeet;
} else {
  areaInFeet = length * width;

  areaInMeters = areaInFeet / SqMetersToSqFeet
}


let decimalAreaInMeters = (areaInMeters).toFixed(2);

let decimalAreaInFeet = (areaInFeet).toFixed(2);

console.log(`The area of the room is ${decimalAreaInMeters} square meters (${decimalAreaInFeet} square feet).`);