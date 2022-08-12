UNDERSTAND THE PROBLEM:
- input: array of strings
- output: hash 
- explicit requirments:
  - hash keys are the names of elements of the string array
  - corresponding values are the positions in the array

EXAMPLES AND TEST CASES: should print `true`
puts hasher(flintstones) == {"Fred"=>0, "Barney"=>1, "Wilma"=>2, "Betty" =>3, "Pebbles"=>4, "BamBam"=>5}

ALGORITHM:
- define `hasher()`
  - takes an array of strings as an input
  - initialize `result_hash` to an empty hash
  - initiazlie counter to 0
  - begin loop
    - stop loop is counter == size of array
    - result_hash[array[counter]] = counter
    - counter += 1
  - end loop
  - result hash

