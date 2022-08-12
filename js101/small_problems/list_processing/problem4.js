/*

Problem:
  Input: string
  Output: array of strings

Algorithm:
  define `leadingSubstrings()` that takes `string` as an argument
    initialize `resultsArray` to an empty array
    from 1 to `string.length`
      add a.substring(0, 3) to `resultsArray`
    return `resultsArray`

*/
/*
function leadingSubstrings(string) {
  let resultsArray = [];
  for (let i = 1; i <= string.length; i += 1) {
    resultsArray.push(string.substring(0, i));
  }
  return resultsArray;
}
*/
/*
function leadingSubstrings(string) {
  return string.split('').map(function (_, index) {
    return string.substring(0, (index + 1));
  });
  
}
*/

function leadingSubstrings(string) {
  let resultsArray = []
  string.split('').reduce(function (accumulator, currentValue) {
    accumulator.push(currentValue);
    resultsArray.push(accumulator.join(''));
    return accumulator;
  }, []);

  return resultsArray;

}


// Test cases:
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]