UNDERSTAND THE PROBLEM:
- input: array of hashes
- output: array of hashes
- rules:
  - use `Array#map`
  - every value in the input array should be incremented by 1

EXAMPLES / TEST CASES: should print `true` to screen
arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]
puts increment(arr) == [{a: 2}, {b: 3, c: 4}, {d: 5, e: 6, f:7}]

APPROACH:
- define `increment()` that takes `array` as an argument
  - call `map` on `array` with `hash` as a block value
    - convert each hash to an array
    - for each element of the array, increment the element at index 1 by 1