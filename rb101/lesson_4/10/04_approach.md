UNDERSTAND THE PROBLEM:
- input: hash
- output: integer
- rules:
  - return the smallest integer out of the values

EXAMPLES/TEST CASES: should print `true` to the screen
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
puts lowest_age(ages) == 10

ALGORITHM:
- define `lowest_age`
  - initialize `age` to 100000
  - initialize `counter` to 0
  - inititalize `names` array that contains keys of given hash
  - begin loop
    - break if counter == names.size
    - if age < hash[names[counter]]
      - age = hash[names[counter]]
    - counter += 1
  return `age`