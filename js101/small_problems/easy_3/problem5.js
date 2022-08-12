/*

Problem:
  Input: number
  Output: string

Algorithm:
  define `triangle()` that takes `numberOfLines` as an argument
    from 1 to 5
      print (number - i) spaces and (i) stars

*/

function triangle(number) {
  for (let i = 1; i <= number; i += 1) {
    console.log(`${' '.repeat(number - i)}${'*'.repeat(i)}`)
  }
}



// Test cases:
triangle(5);
triangle(9);
