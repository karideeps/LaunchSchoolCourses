UNDERSTAND THE PROBLEM:
- input: array of strings
- output: array of strings
- rules:
  - elements of output array can only have first 3 characters of corresponding input array

EXAMPLES/TEST CASES: all should print `true` to screen
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
puts shorten(flintstones) == %w(Fre Bar Wil Bet Bam Peb)

ALGORITHM:
- define `shorten()` takes an array of strings as input
  - initialize `short_form` to an empty array
  - initialize `counter` to 0
  - begin loop
    - break if counter == array.size
    - short_form << array[counter][0,3]
    - counter += 1
  - end

