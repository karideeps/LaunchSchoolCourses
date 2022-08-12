UNDERSTAND THE PROBLEM:
- input: array of hashes
- output: array of hashes
- rules:
  - return an array that only contains hash values that are even

EXAMPLES/TEST CASES: should print `true` to the screen
arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]
puts select_me(arr) == [{b: [2, 4, 6], d: [4]}, {e: [8], f: [6, 10]}]

APPROACH:
- define `select_me()` that takes `array` as an argument
  - call `select` on each `hash` of `array`
    - only select hashes pairs where all values are even
    -USED A DIFFERENT APPROACH by planning on white board