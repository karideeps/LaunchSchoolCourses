const readlineSync = require('readline-sync');

const MONTHS_IN_YEAR = 12;

function prompt (message) {
  console.log(`=> ${message}`);
}

function displayWelcomeMessage() {
  prompt("Welcome to Loan Calculator!");
  prompt("---------------------------");
}

function getLoanAmount() {
  prompt ('Enter the loan amount as a number without $ or commas. Example 12000');
  return readlineSync.question();
}

function invalidNumber(loanAmount) {
  return loanAmount.trim() === '' ||
         isNaN(Number(loanAmount)) ||
         Number(loanAmount) < 0;
}

function getAPR() {
  prompt ('Enter the APR as a number without % or commas. Example 5.5');
  return readlineSync.question();
}

function getLoanYears() {
  prompt ('Enter the loan duration in years greater than 0 without decimals or commas. Example 12');
  return readlineSync.question();
}

function invalidLoanYears(loanYears) {
  return loanYears.trim() === '' ||
         isNaN(Number(loanYears)) ||
         Number(loanYears) <= 0 ||
         loanYears % 1 !== 0;
}

function calculateLoanMonths(loanYears) {
  return loanYears * MONTHS_IN_YEAR;
}

function calculateMonthlyPayment(loanAmount, loanMonths, apr) {
  if (apr > 0) {
    let annualRate = (Number(apr) / 100);
    let monthlyRate = annualRate / MONTHS_IN_YEAR;
    return Number(loanAmount) *
           (monthlyRate /
           (1 - Math.pow((1 + monthlyRate), (-loanMonths))));
  } else {
    return Number(loanAmount) / loanMonths;
  }
}

function displayMonthlyPayment(monthlyPayment, loanMonths) {
  prompt(`Your monthy payment is $${monthlyPayment.toFixed(2)} for ${loanMonths} months.`);
}

function getAnotherCalculation () {
  prompt("Would you like to do another calculation? Please enter 'y' for yes or 'n' for no.");
  return readlineSync.question().toLowerCase();
}

function invalidAnotherCalculation (anotherCalculation) {
  return !['y', 'n'].includes(anotherCalculation.toLowerCase());
}

function calculations(numberOfCalculations) {
  return numberOfCalculations === 1 ? 'calculation' : 'calculations';
}

function displayGoodbyeMessage(numberOfCalculations) {
  prompt (`Thank you for using Loan Calculator; you did ${numberOfCalculations} ${calculations(numberOfCalculations)}!`);
}

console.clear();

displayWelcomeMessage();

let numberOfCalculations = 0;
let anotherCalculation = 'y';

do {

  if (numberOfCalculations > 0) {
    console.clear();
  }

  let loanAmount = getLoanAmount();
  while (invalidNumber(loanAmount)) {
    loanAmount = getLoanAmount();
  }

  let apr = getAPR();
  while (invalidNumber(apr)) {
    apr = getAPR();
  }

  let loanYears = getLoanYears();
  while (invalidLoanYears(loanYears)) {
    loanYears = getLoanYears();
  }

  let loanMonths = calculateLoanMonths(loanYears);

  let monthlyPayment = calculateMonthlyPayment(loanAmount, loanMonths, apr);

  displayMonthlyPayment(monthlyPayment, loanMonths);

  anotherCalculation = getAnotherCalculation();
  while (invalidAnotherCalculation(anotherCalculation)) {
    anotherCalculation = getAnotherCalculation();
  }

  numberOfCalculations += 1;

} while (anotherCalculation === 'y');

displayGoodbyeMessage(numberOfCalculations);