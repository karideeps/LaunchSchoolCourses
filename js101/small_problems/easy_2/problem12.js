



function integerToString(number) {
  let letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let arrayOfCharacters = []
  number = Math.abs(number);
  do {
    arrayOfCharacters.unshift(letters[number % 10]);
    number = Math.floor(number/10);
  } while (number > 0);
  return arrayOfCharacters.join('');
}

function signedIntegerToString(number) {
  if (Math.sign(number) === 1) {
    return ('+' + integerToString(number));
  } else if (Math.sign(number) === -1) {
    return('-' + integerToString(number));
  } else {
    return '0';
  }
}




// Test cases:
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");