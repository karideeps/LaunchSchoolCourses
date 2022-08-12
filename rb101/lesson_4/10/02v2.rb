def age_adder(family_hash)
  total_age = 0
  family_hash.each_value do |value|
    total_age += value
  end
  total_age
end

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
puts age_adder(ages) == 6174
