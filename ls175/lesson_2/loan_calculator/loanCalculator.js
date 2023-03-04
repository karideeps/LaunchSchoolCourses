const APR = 5;

function loanCalculator(loanAmount, durationYears) {
  let p = loanAmount;
  let j = APR / 12; // monthly interest rate
  let n = durationYears * 12; // loan duration in months

  let m = p * (j / (1 - Math.pow((1 + j), (-n))));
  return m;
}

console.log(loanCalculator(5000, 10));