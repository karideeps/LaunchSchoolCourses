function invalidLoanDuration(loanDuration) {
  return loanDuration.trim() === '' ||
         isNaN(Number(loanDuration)) ||
         Number(loanDuration) < 0 ||
         loanDuration % 1 !== 0;
}






// Test cases:

console.log(invalidLoanDuration('1234.56') === true);
console.log(invalidLoanDuration('1234.') === false);
console.log(invalidLoanDuration('12.34.56') === true);
console.log(invalidLoanDuration('.1234') === true);
