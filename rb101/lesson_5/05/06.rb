def printer(family_hash)
  family_hash.each_pair do |key, value|
    puts "#{key} is a #{value["age"]}-year-old #{value["gender"]}."
  end
end


# EXAMPLES/TEST CASES:
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

printer(munsters) # should print 5 lines to the screen

