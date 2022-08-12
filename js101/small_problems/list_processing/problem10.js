/*

Problem:
  Input: number, array of objects
  Output: boolean

Algorithm:
  define `isItemAvailable()` that takes `id` and `transactions` as arguments
    initialize `filterTransactions` to the return value of `transactionsFor(id, transactions)`;
    reduce based on `movement`


*/

function isItemAvailable(id, transactions) {

  let filteredTransactions = transactionsFor(id, transactions)

  let totalItems =  filteredTransactions.reduce(function (accumulator, currentValue) {
    if (currentValue.movement === 'in') {
      return accumulator += currentValue.quantity;
    } else {
      return accumulator -= currentValue.quantity;
    }
  }, 0);

  return totalItems > 0;

}






function transactionsFor(id, transactions) {
  return transactions.filter(function (object) {
    return object.id === id;
  });
}


// Test cases:
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions) ===  false);
console.log(isItemAvailable(103, transactions) ===  false);
console.log(isItemAvailable(105, transactions) ===  true);


