UNDERSTAND THE PROBLEM:
- input: hash
- output: array
- rules:
  - output array should contain colors of fruits, and size of vegetables

EXAMPLES/TEST CASES: should print `true` to the screen
hsh = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

puts find_me(hsh) == [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

APPROACH:
- define `find_me()` that takes a `hash` as an argument
  - initialize `results_array` to an empty array
  - for each `fruit`, `detail` pair in `hash`
    - if `detail[:type] == 'fruit'`
      - results_array << details[:colors]
    - else
      - results_array << details[:size]
  - return `results_array`