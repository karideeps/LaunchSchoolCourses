def tally(string)
  tally_hash = Hash.new(0)
  counter = 0

  loop do
    break if counter == string.size
    tally_hash[string[counter]] += 1 unless string[counter] == ' '
    counter += 1
  end

  tally_hash
end

# EXMAPLES/TEST CASES: all should print `true` to the screen
statement = "The Flintstones Rock"
puts tally(statement) == {"T"=>1, "h"=>1, "e"=>2, "F"=>1, "l"=>1, "i"=>1, "n"=>2, "t"=>2, "s"=>2, "o"=>2, "R"=>1, "c"=>1, "k"=>1}
