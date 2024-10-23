function rot13(string) {
  let result = ''

  for (let char of string) {
    result += isLetter(char) ? rotate(char) : char;
  }
  return result;
}

function rotate(char) {
  const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
  const OFFSET = 13;

  let lowerChar = char.toLowerCase();
  let idx = ALPHABETS.indexOf(lowerChar);

  let rotatedIdx = idx + OFFSET;
  rotatedIdx = rotatedIdx % ALPHABETS.length; // wrap if needed
  let rotatedChar = ALPHABETS[rotatedIdx];

  return char === lowerChar ? rotatedChar : rotatedChar.toUpperCase();
}

function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

console.log(rot13('Teachers open the door, but you must enter by yourself.') == 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.')

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')) === 'Teachers open the door, but you must enter by yourself.')