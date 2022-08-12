/*

Problem:
  Input: string
  Output: string

Algorithm:
  define `reverseWords()` that takes `string` as an argument
    split `string` into an array of words
    for each `word` in `arrayOfWords`
      if word length >= 5
        reverse word
      else
        word


*/

function reverseWords(string) {

  return string.split(' ')
               .map(word => word.length >= 5 ? reverser(word) : word)
               .join(' ');
}

function reverser(word) {
  return word.split('').reverse().join('')
}


// Test cases:
console.log(reverseWords('Professional') === "lanoisseforP");
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");
console.log(reverseWords('Launch School') === "hcnuaL loohcS");