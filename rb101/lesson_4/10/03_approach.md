UNDERSTAND THE PROBLEM:
- input: hash (string keys, and integer values)
- output: hash
- explicit requirments:
  - hash can only contain elements of the input hash whose value is < 100

EXAMPLES/TEST CASES: all should print `true` to screen
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
puts under_100(ages) == {"Herman"=>32, "lily" =>30, "Eddie"=>10}

ALGORITHM:
- define `under_100()`
  - initialize `family_under_100` to an empty hash
  - initialize counter to 0
  - initialize `family_names` to hash.keys
  - begin loop
    - break if counter == family_names.size
    - next if hash[family_names[counter]] is >= 100
    - family_under_100[family_names[counter]] = hash[family_names[counter]]
  - end
  - return `family_under_100`