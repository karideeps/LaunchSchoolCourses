/*

Problem:
  input: string
  Output: object

Algorithm:
  initialize `resultsObject` to {}
  iterate through all the characters in `statement`
  if character is space
    continue
  if `resultsObject` has property
    resultsObject[propert] += 1
  else
    resultsObject[property] = 1

*/






let statement = "The Flintstones Rock";

let resultsObject = {};

statement.split('').forEach(function (element) {
  if (element === ' ') {
    return true;
  } else if (resultsObject.hasOwnProperty(element)) {
    resultsObject[element] += 1;
  } else {
    resultsObject[element] = 1;
  }
});

console.log(resultsObject);