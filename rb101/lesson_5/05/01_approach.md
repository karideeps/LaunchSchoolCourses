UNDERSTAND THE PROBLEM:
- input: array of numerical strings
- output: new array with strings 
- rules:
  - ordered by descending numeric value

EXAMPLES AND TEST CASES: should print `true` to screen
arr = ['10', '11', '9', '7', '8']
puts arr.descend == ['11', '10', '9', '8', '7']

APPROACH:
- define `descend()` that takes an `array` as an argument. `array` is an array of strings
  - `sort` descending order
  - compare numeric value of string1 to string2
    - convert each string of the array into a numeric value using `map`
