flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

def hasher(array_of_names)

  results_hash = {}

  array_of_names.each_with_index do |name, index|
    results_hash[name] = index
  end

  results_hash
end

# EXAMPLES AND TEST CASES: should print `true`
puts hasher(flintstones) == {"Fred"=>0, "Barney"=>1, "Wilma"=>2, "Betty" =>3, "Pebbles"=>4, "BamBam"=>5}
