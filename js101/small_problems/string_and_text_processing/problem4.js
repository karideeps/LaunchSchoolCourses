/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `wordCap()` that takes `string` as an argument
    split string into an array of words
    transform word
      capitalize first letter + rest of word
    join words with space

*/

function wordCap(string) {
  return string.split(' ')
               .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
               .join(' ')
}


// Test cases:
console.log(wordCap('four score and seven') === "Four Score And Seven")
console.log(wordCap('the javaScript language') === "The Javascript Language")
console.log(wordCap('this is a "quoted" word') === 'This Is A "quoted" Word')