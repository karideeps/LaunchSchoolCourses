def find_index(array)
  counter = 0
  loop do
    break if counter == array.size
    break if array[counter][0..1] == "Be"
    counter += 1
  end

  counter
end

# EXAMPLES/TEST CASES: should print `true` to the screen
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
puts find_index(flintstones) == 3
