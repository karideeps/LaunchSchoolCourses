UNDERSTAND THE PROBLEM:
- input: array
- output: array
- rules:
  - input array contains arrays of strings or numbers
  - output array should be a new array with each individual array arranged in descending order

EXAMPLES/TEST CASES:
arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]
sort_descend(arr) == [['c', b', 'a'], [3, 2, 1], ['green', 'blue', 'black']]

APPROACH:
- define `sort_descend()` that takes an `array` as an argument
  - transform each sub array into
    - into desceding array
    