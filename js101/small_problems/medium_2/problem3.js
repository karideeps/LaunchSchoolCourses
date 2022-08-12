/*

Problem:
  Input: 3 numbers
  OUtput: string

Algorithm:
  define `triangle()` that takes `angle1` `angle2` and `angle3` as arguments
    if sum of angles is not 180, return invalid
    if the minimum angle is not >0, return invalid

    if side1 or side2 or side3 === 90
      return 'right'
    if side1 or side2 or side3 > 90
      return 'obtuse'
    else 
      return 'acute'


*/

function triangle(angle1, angle2, angle3) {
  let anglesArray = [angle1, angle2, angle3]
  let angleSum = anglesArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  anglesArray.sort((a, b) => Number(a) - Number(b));

  if (angleSum !== 180) return 'invalid';
  if (anglesArray[0] <= 0) return 'invalid';

  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return 'right';
  } else if (angle1 > 90 || angle2> 90 || angle3 > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }

}





// Test cases:
console.log(triangle(60, 70, 50) ===  "acute");
console.log(triangle(30, 90, 60) ===  "right");
console.log(triangle(120, 50, 10) === "obtuse");
console.log(triangle(0, 90, 90) === "invalid");
console.log(triangle(50, 50, 50) === "invalid");