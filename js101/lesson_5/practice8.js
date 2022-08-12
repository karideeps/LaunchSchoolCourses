let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};


/*


Get an array of arrayOfValues
  loop thorugh outer arrays
    loop through words in inner array
      split word into an array of chars and loop throuhg it
        if letter is a vowel
          console.log it


*/

Object.values(obj).forEach(function (innerArray) {
  innerArray.forEach(function (word) {
    word.split('').forEach(function (letter) {
      if (/[aeiou]/.test(letter)) {
        console.log(letter);
      }
    })
  })
})
