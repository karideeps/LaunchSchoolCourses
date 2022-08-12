/*

Problem:
  Input: three numbers
  Output: string

Algorithm:
  define `triangle()` that takes `side1`, `side2`, and `side3` as arguments
    declare `arrayOfSides` that takes `side 1... 3`
    sort `arrayOfSides` from smallest to largest
    if `arrayOfSides[0]` + [1] < [2] return 'invalid'
    if any value in `arrayOfSides` is less than 0
      return invalid
    compare sides

*/

function triangle(side1, side2, side3) {
  let arrayOfSides = [side1, side2, side3]

  arrayOfSides.sort((a,b) => Number(a) - Number(b))

  if (arrayOfSides[0] + arrayOfSides[1] < arrayOfSides[2]) {
    return 'invalid';
  }

  if (arrayOfSides.some(side => side <= 0)) {
    return 'invalid';
  }

  if (side1 === side2 && side1 === side3) {
    return 'equilateral';
  } else if (side1 === side2 && side1 !== side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }

}





// Test cases:
console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5) === "scalene");
console.log(triangle(0, 3, 3) === "invalid");
console.log(triangle(3, 1, 1) === "invalid");