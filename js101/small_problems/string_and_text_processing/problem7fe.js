function staggeredCase(string, boolean = true) {

  if (boolean) {
    let caseCounter = 0;
    return string.split('').map(function (element) {
      if (/[a-z]/i.test(element)) {
        caseCounter += 1;
        if (caseCounter % 2 === 1) {
          return element.toUpperCase();
        } else {
          return element.toLowerCase();
        }
      }
      return element;
  
    }).join('');
  }

  return string.split('')
  .map((character, index) => index % 2 === 0 ? character.toUpperCase() : character.toLowerCase())
  .join('');

}


// Test cases:
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('I Love Launch School!', false) === "I LoVe lAuNcH ScHoOl!");
