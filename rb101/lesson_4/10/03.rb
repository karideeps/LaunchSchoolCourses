def under_100(family_hash)
  family_under_100 = {}
  counter = 0
  family_names = family_hash.keys

  loop do
    break if counter == family_names.size
    if family_hash[family_names[counter]] < 100
      family_under_100[family_names[counter]] = family_hash[family_names[counter]]
    end
    counter += 1
  end

  family_under_100
end


# EXAMPLES/TEST CASES: all should print `true` to screen
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
puts under_100(ages) == {"Herman"=>32, "Lily" =>30, "Eddie"=>10}
