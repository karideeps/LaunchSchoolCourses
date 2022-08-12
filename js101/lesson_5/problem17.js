/*

Problem:
  Input: nothing
  Output: UUID

Algorithm:
  define `uuidCreater()` that takes no arguments
    get a srting of 8 random character from 0 - 9 and a - f
    add -
    get a string of 4 randomcharacters
    add -
    get a string of 4 randomcharacters
    add -
    get a string of 4 randomcharacters
    add -
    get a string of 4 randomcharacters
    add -
    get a string of 12 random characters

    define `randomHexString()` that takes `length of Character` as an argument
      declare `string` and assign it ''
      for 1 to `lengthOfCharacter`
        random number from 0 - 15
          use the index of the number on the `HEX_CHARS` array
        add it to `string`
      return string
*/

const HEX_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

function randomHexString(lengthOfString) {
  let string = ''
  for (let i = 1; i <= lengthOfString; i += 1) {
    let randomIndex = Math.floor(Math.random() * 16);
    string += HEX_CHARS[randomIndex];
  }
  return string;
}

function uuidCreator() {
  return`${randomHexString(8)}-${randomHexString(4)}-${randomHexString(4)}-${randomHexString(4)}-${randomHexString(4)}-${randomHexString(12)}`;
}



console.log(uuidCreator());