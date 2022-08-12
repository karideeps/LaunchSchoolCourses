UNDERSTAND THE PROBLEM:
- input: array of strings
- output: integer
- rules:
  - index of first name that starts with "Be"

EXAMPLES/TEST CASES: should print `true` to the screen
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
puts find_index(flintstones) == 3

ALGORITHM:
- define `fine_index` which takes an array of strings
  - inititalize `counter` to 0
  - begin loop
    - break if counter == array.size
    - break if array[counter][0..1] == "Be"
    - counter += 1
  - return counter