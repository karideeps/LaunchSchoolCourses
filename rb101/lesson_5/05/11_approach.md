UNDERSTAND THE PROBLEM:
- input: array of integer arrays
- output: array of integer arrays
- rules:
  - output should have an identical structure to input
  - only contain integers that are multiples of 3
  - use `select` or `reject`

EXAMPLES/TEST CASES: should print `true` to the screen
arr = [[2], [3, 5, 7], [9], [11, 13, 15]]
puts multiples_3(arr) == [[], [3], [9], [15]]

APPROACH:
- define `multiples_3()` that takes an `array` as an argument
  - transform each sub array into an array that only contains multiples of 3
    - select integers that are multiples of 3 from each sub array
    