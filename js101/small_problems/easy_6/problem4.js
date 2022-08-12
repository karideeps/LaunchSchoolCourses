/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `centreOf()` that takes `string` as an argument
    if string.length is odd
      return the letter at index Math.floor(string.length / 2)
    else
      string.slice (string.length / 2 - 1, string.length / 2 + 1)

*/

function centerOf(string) {
  if (string.length % 2 === 1) {
    return string[Math.floor(string.length / 2)];
  } else {
    let middleIndex = string.length / 2;
    return string.slice(middleIndex - 1, middleIndex + 1);
  }
}



// Test cases:
console.log(centerOf('I Love JavaScript') === "a");
console.log(centerOf('Launch School') === " ");
console.log(centerOf('Launch') === "un");
console.log(centerOf('Launchschool') === "hs");
console.log(centerOf('x') === "x");