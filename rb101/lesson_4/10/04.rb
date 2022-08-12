def lowest_age(family_hash)
  age = 100000
  counter = 0
  names = family_hash.keys

  loop do
    break if counter == names.size
    if age > family_hash[names[counter]]
      age = family_hash[names[counter]]
    end
    counter += 1
  end

  age
end

# EXAMPLES/TEST CASES: should print `true` to the screen
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
puts lowest_age(ages) == 10
