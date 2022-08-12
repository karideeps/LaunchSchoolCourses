# puts "the value of 40 + 2 is " + (40 + 2)

# this will result in an error because you can't "add" an integer to a string

# solution #1 using string interpolation
puts "the value of 40 + 2 is #{(40 + 2)}"

# soultion using string concatination
puts "the value of 40 + 2 is " + (40 + 2).to_s

