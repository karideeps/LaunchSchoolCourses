def age_adder(family_hash)
  total_age = 0
  counter = 0
  family_names = family_hash.keys

  loop do
    break if counter == family_names.size
    total_age += family_hash[family_names[counter]]
    counter += 1
  end

  total_age
end


#EXAMPLES/TEST CASES: all cases should print `true` to screen

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
puts age_adder(ages) == 6174
