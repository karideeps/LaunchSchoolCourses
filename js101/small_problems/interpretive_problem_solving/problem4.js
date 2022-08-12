/*

Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

Problem:
  Input: number
  Output: print to screen
  
Algorithm:
  define `star()` that takes `numberOfLines` as an argument
    declare linesInUpperHalf = Math.floor(numberOfLines / 2);
    iterate from 0 to linesInUpperHalf
      declare `outsideSpace` = i
      declare `insideSpace` = linesInUpperHalf - 1 - outsideSpace
      declare `lineToPrint` to the specified format
      print to line to screen
    
    print `numberOfLines` stars
    
    interte from linesInUpperHalf to 0
      as above

*/

function star(numberOfLines) {
  let linesInUpperHalf = Math.floor(numberOfLines / 2);
  
  for (let i = 0; i < linesInUpperHalf; i+= 1) {
    printLine(i, linesInUpperHalf);
  }
  
  console.log('*'.repeat(numberOfLines));
  
  for (let i = linesInUpperHalf - 1; i >= 0; i-= 1) {
    printLine(i, linesInUpperHalf);
  }
}

function printLine(i, linesInUpperHalf) {
  let outsideSpaces = i;
  let insideSpaces = linesInUpperHalf - 1 - outsideSpaces;
  let line = `${' '.repeat(outsideSpaces)}*${' '.repeat(insideSpaces)}*${' '.repeat(insideSpaces)}*`
  console.log(line);
}




// Test cases:
star(9)