flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

puts flintstones.find_index {|name| name[0..1] == "Be"} == 3