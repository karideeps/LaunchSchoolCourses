UNDERSTAND THE PROBLEM:
- input: array of arrays. Each sub array has 2 elements
- output: hash 
- rules:
  - where first element of input sub array is a key, and second is a value

EXAMPLES/TEST CASES: should print `true` to the screen
arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
puts hash_me(arr) == {:a=>1, "b"=>"two", "sea"=>{:c=>3}, {:a=>1, :b=>2, :c=>3, :d=>4}=>"D"}

APPROACH:
- define  `hash_me()` which takes `array` as an argument
  - initialize `result_hash` to an empty hash
  - for each `sub_array` in `array`
    - `result_hash[sub_array[0]] = sub_array[1]`
  - return `result_hash`