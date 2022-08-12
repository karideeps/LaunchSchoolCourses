function diamond(numberOfRows) {
  for (let i = 1; i <= numberOfRows; i += 2) {
    printRow(i, numberOfRows)
  }
  
  for (let i = numberOfRows - 2; i >= 1; i -= 2){
    printRow(i, numberOfRows);
  }
}

function printRow(i, numberOfRows) {
  let outerSpace = (numberOfRows - i) / 2
  if (i === 1) {
    console.log(`${' '.repeat(outerSpace)}*`)
    return;
  }
  let innerSpace = i - 2;
  console.log(`${' '.repeat(outerSpace)}*${' '.repeat(innerSpace)}*`)
}




// Test cases:

diamond(9);