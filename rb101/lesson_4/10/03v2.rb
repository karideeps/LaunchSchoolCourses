# EXAMPLES/TEST CASES: all should print `true` to screen
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
puts ages.select {|k,v| v < 100} == {"Herman"=>32, "Lily" =>30, "Eddie"=>10}