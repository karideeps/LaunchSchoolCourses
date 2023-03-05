const APR = 0.05; // 5%

function monthlyPayment(loanAmount, durationYears) {
  let p = loanAmount;
  let j = APR / 12; // monthly interest rate
  let n = durationYears * 12; // loan duration in months

  let m = p * (j / (1 - Math.pow((1 + j), (-n)))); // monthly payment
  return m.toFixed(2);
}

module.exports = monthlyPayment;