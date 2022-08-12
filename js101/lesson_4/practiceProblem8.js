/*

Problem:
  Input: String
  Output: object

Algorithm:
  initialize `resultsObject` = {}
  iterate through elements and index in `flintstones`
    resultsObject[element] = index
  log resultsObject

*/


let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];


let resultsObject = {};

flintstones.forEach(function (element, index) {
  resultsObject[element] = index;
})

console.log(resultsObject);