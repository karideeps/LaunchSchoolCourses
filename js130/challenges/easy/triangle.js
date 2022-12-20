/*

declare a class `Triangle` that takes 3 arguments
  this.sides = [side1, side2, side3].sort();

  if triangle is NOT a valid triangle
    throw new Error

  isValidTriangle()
    if all sides are greater than 0 AND the sum of two sides is greater than the third
      return true
    else
      return false

  kind() 
    if side1 === side2 && side1 === side3 return equilateral
    if side1 === side2 || side2 === side3 return isosolece
    return 'scalane'
*/

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a, b) => a - b);

    if (!this.isValidTriangle()) throw new Error;
  }

  isValidTriangle() {
    if (this.sides[0] <= 0) return false;
    if ((this.sides[0] + this.sides[1]) <= this.sides[2]) return false;
    return true;
  }

  kind() {
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2]) {
      return 'equilateral';
    } else if (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2]) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;