UNDERSTAND THE PROBLEM:
- input: 
  - array of integers
  - optional: punctuation seperation ',' is default
  - optional: joining word 'or' is default
- output: string
- rules:
  - print integers as a string
  - seperated by commas or given punctuation
  - and joining word before last integer
  - if array has 2 words, ignore punctuation
  - if array has 1 word, print array

EXAMPLES/TEST CASES:
puts joinor([1]) == "1"
puts joinor([1, 2]) == "1 or 2"
puts joinor([1, 2, 3]) == "1, 2, or 3"
puts joinor([1, 2, 3], '; ') == "1; 2; or 3"
puts joinor([1, 2, 3], ', ', 'and') == "1, 2, and 3"

APPROACH:
- define `joinor()` that takes `array_of_integers`, `punctuation` (default == ','), and `joining_word`(default == 'or') as arguments
  - initialize `results_string` to an empty string
  - if `array_of_integers` has one element
    - append element at index 0 to `results_string`
  - else if `array_of_integers` has two elements
    - append element at index 0 `joining_word` and element at index 1 to `results_string`
  - else
    - for each `value and index` in `array_of_integers`
      - if last index
        - append '`punctuation`, `joining word` and `element`'
      - else
        - append '`punctuation`, `element`'
  - return `results_string`