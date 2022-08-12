def hasher(array_of_strings)
  result_hash = {}
  counter = 0

  loop do
    break if counter == array_of_strings.size
    result_hash[array_of_strings[counter]] = counter
    counter += 1
  end

  result_hash
end

flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

# EXAMPLES AND TEST CASES: should print `true`
puts hasher(flintstones) == {"Fred"=>0, "Barney"=>1, "Wilma"=>2, "Betty" =>3, "Pebbles"=>4, "BamBam"=>5}
