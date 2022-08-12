/*

Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Problem:
  Input: odd number
  Output: print to screen
 
 Algorithm:
  define `diamond()` that takes `numberOfRows` as an argument
    iterate by 2 from 1 to `numberOfRows`
      let numberOfSpaces = (numberOfRows - i) / 2
      let lineToPrint = ' '.repeat(numberOfSpaces) + '*'.repeat(i)
      console.log(lineToPrint);
      
    interate by 2 from `numberOfRows - 2` to 1
      


*/


function diamond(numberOfRows) {
  for (let i = 1; i <= numberOfRows; i += 2) {
    printRow(i, numberOfRows);

  }
  
  for (let i = numberOfRows - 2; i >= 1; i -= 2){
    printRow(i, numberOfRows);
  }
}

function printRow(i, numberOfRows) {
  let numberOfSpaces = (numberOfRows - i) / 2;
  let lineToPrint = ' '.repeat(numberOfSpaces) + '*'.repeat(i);
  console.log(lineToPrint);
}




// Test cases:

diamond(9);