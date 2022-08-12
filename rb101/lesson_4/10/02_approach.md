UNDERSTAND THE PROBLEM:
- input: hash
- output: integer
- rules:
  - Explicit:
    - add up all values of the hash

EXAMPLES/TEST CASES: all cases should print `true` to screen
age_adder(ages) == 6174

ALGORITHM:
- define `age_adder()`
  - initialize `total_age` to 0
  - initialize `counter` to 0
  - initialize array `names` which contains all the keys of hash
  - begin loop
    - break if counter == names size
    - itterate sum by hash[names[counter]]
    - counter += 1
  - end loop
  - return total_age

