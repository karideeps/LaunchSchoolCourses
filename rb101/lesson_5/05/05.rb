def male_age(family_hash)
  keys = family_hash.keys
  age_sum = 0
  counter = 0

  loop do
    break if counter == keys.size

    if family_hash[keys[counter]]["gender"] == "male"
      age_sum += family_hash[keys[counter]]["age"] 
    end
    counter += 1

  end

  age_sum
end


# EXAMPLES AND TEST CASES: should print `true` to the screen
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

puts male_age(munsters) == 32 + 402 + 10

