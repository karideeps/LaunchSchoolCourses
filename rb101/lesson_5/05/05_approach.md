UNDERSTAND THE PROBLEM:
- input: hash of hashes
- output: integer
- rules: 
  - sum of all "age" of if "geneder" == "male"

EXAMPLES AND TEST CASES: should print `true` to the screen
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

puts male_age(munsters) == 32 + 402 + 10

APPROACH:
- define `male_age()` that takes a `family_hash` as an argument
  - initialize `keys` to an array that contains all the keys within `family_hash`
  - initialize `age_sum` to 0
  - initialize `counter` to 0

  - begin loop
    - break if counter = keys.size
    - if family_hash[keys[counter]]["gender"] == "male"
      - age_sum += family_hash[keys[counter]]["age"] 
    - counter += 1
  - end

  - return `age_sum`