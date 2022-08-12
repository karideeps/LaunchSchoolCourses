def add_age_group(family_data)
  names = family_data.keys
  counter = 0

  loop do
    break if counter == names.size
    family_data[names[counter]]["age_group"] = age_group(family_data[names[counter]]["age"])
    counter += 1
  end

  family_data
end

def age_group(age)
  if age <= 17
    "kid"
  elsif age >= 65
    "senior"
  else
    "adult"
  end
end


# EXAMPLES/TEST CASES: should print `true` to screen
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

