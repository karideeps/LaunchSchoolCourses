def tricky_method(a_string_param, an_array_param)
  a_string_param += "rutabaga"
  an_array_param << "rutabaga"
end

my_string = "pumpkins"
my_array = ["pumpkins"]
tricky_method(my_string, my_array)

puts "My string looks like this now: #{my_string}" # pumpkins, my_string's VALUE was reassigned inside the method. Original variable unchanged
puts "My array looks like this now: #{my_array}" # ["pumpkins", "rutabaga"]. << mutated the array inside the method