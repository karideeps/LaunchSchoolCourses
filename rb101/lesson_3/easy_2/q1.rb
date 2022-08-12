ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

p ages["Spot"]

p ages.assoc("Spot")

p ages.fetch("Spot") {|key| "#{key} is not present in the hash"}

# launch school answers

p ages.key?("Spot")

p ages.include?("Spot")

p ages.member?("Spot")