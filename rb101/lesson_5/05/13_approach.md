UNDERSTAND THE PROBLEM:
- input: array of arrays
- output: array of arrays
- rules:
  - sub arrays should be sorted in the output array from ascending to descending
  - only take odd numbers into consideration

EXAMPLES/TEST CASES: should print `true` to the screen
arr = [[1, 6, 7], [1, 4, 9], [1, 8, 3]]
puts sort_me(arr) == [[1, 8, 3], [1, 6, 7], [1, 4, 9]]

APPROACH
- define `sort_me()` that takes `array` as an argument
  - call `sort_by` on `array` to evaluate each `sub_array`
    - select only odd numbered elements