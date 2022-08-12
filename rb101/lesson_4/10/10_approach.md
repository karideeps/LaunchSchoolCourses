UNDERSTAND THE PROBLEM:
- input: hash within hash
- output: hash within hash
- rules:
  - add an additional key-value-pair to each hash within hash
  - addtional key is "age_group"
  - corresponding value is 
    "kid" if "age" is betwee 0 - 17
    "adult" if "age" is between 18 - 64
    "senior" if "age" is >= 65

EXAMPLES/TEST CASES: should print `true` to screen
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

puts add_age_group(munsters) == { "Herman" => { "age" => 32, "gender" => "male", "age_group" => "adult" },
  "Lily" => {"age" => 30, "gender" => "female", "age_group" => "adult" },
  "Grandpa" => { "age" => 402, "gender" => "male", "age_group" => "senior" },
  "Eddie" => { "age" => 10, "gender" => "male", "age_group" => "kid" },
  "Marilyn" => { "age" => 23, "gender" => "female", "age_group" => "adult" } }

ALGORITHM:
- define `add_age_group()` that takes a hash `family_data` as an argument
  - initialize `names` as an array contating the keys of `family_data`
  - initialize counter to 0

  - begin loop
    - break if counter == `names`.size
    - if family_data[names[counter]]["age"] <= 17
      - family_data[names[counter]]["age_group"] = "kid"
    - elseif family_data[names[counter]]["age"] >= 65
      - family_data[names[counter]]["age_group"] = "senior"
    -else
      - family_data[names[counter]]["age_group"] = "adult"
    - counter += 1
  - end
  - return family_data
