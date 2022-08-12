UNDERSTAND THE PROBLEM:
- input: hash within a hash
- output: sentence string for each key in the outer hash
- rules:
  - print (Name) is a (age)-year-old (male or female). f or each key in the outer hash

EXAMPLES/TEST CASES:
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

printer(munsters) # should print 5 lines to the screen

APPROACH:
- define `printer()` that takes a `family_hash` as an argument
  - for each pair
    - puts "key" is a "value["age"]"-year-old "value["gender"]".