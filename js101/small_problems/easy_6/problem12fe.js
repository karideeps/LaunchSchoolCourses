/*

Problem:
  Input: string
  Output: boolean

Algorithm:
  define `isBalanced()` that takes `string` as an argument
    initialize `counter` to 0
    iterate through `characters` in string
      if character is `(` then counter += 1
      if character is `)` then counter -= 1
      if counter is every <0
        return false
      if counter === 0 return true

*/

function isBalanced(string) {
  let counter = 0;
  let arrayOfCharacters = string.split('');

  for (let i = 0; i < arrayOfCharacters.length; i += 1) {
    if (arrayOfCharacters[i] === '(') {
      counter += 1;
    } else if (arrayOfCharacters[i] === ')') {
      counter -= 1;
    }

    if (counter === -1) {
      return false;
    }
  }

  if (counter !== 0) {
    return false
  }

  for (let i = 0; i < arrayOfCharacters.length; i += 1) {
    if (arrayOfCharacters[i] === '[') {
      counter += 1;
    } else if (arrayOfCharacters[i] === ']') {
      counter -= 1;
    }

    if (counter === -1) {
      return false;
    }
  }

  if (counter !== 0) {
    return false
  }

  for (let i = 0; i < arrayOfCharacters.length; i += 1) {
    if (arrayOfCharacters[i] === '{') {
      counter += 1;
    } else if (arrayOfCharacters[i] === '}') {
      counter -= 1;
    }

    if (counter === -1) {
      return false;
    }
  }

  if (counter !== 0) {
    return false
  }

  for (let i = 0; i < arrayOfCharacters.length; i += 1) {
    if (arrayOfCharacters[i] === "'") {
      counter += 1;
    }
  }

  if (counter % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < arrayOfCharacters.length; i += 1) {
    if (arrayOfCharacters[i] === '"') {
      counter += 1;
    }
  }

  if (counter % 2 !== 0) {
    return false;
  }

  return true;
}


// Test cases
// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);
// console.log(isBalanced("[]") === true);
// console.log(isBalanced('][') === false);
console.log(isBalanced("''") === true);
console.log(isBalanced("''][]") === false);
