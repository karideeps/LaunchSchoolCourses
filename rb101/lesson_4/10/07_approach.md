UNDERSTAND THE PROBLEM:
- input: string
- output: hash
- rules:
  - keys of the hash are individual characters of the string. Case sensitive!
  - ignore ' '
  - values are the frequency at which the character appears

EXMAPLES/TEST CASES: all should print `true` to the screen
statement = "The Flintstones Rock"
puts tally(statement) = {"T"=>1, "h"=>1, "e"=>2, "F"=>1, "l"=>1, "i"=>1, "n"=>2, "t"=>2, "s"=>2, "o"=>2, "R"=>1, "c"=>1, "k"=>1}

ALGORITHM:
- define `tally()` that takes a string argument
  - initialize `tally_hash` as an empty hash with a default value of 0
  - initialize `counter` to 0
  - begin loop
    - break if `counter` == string argument size
    - tally_hash[string[counter]] += 1 unless string[counter] == ' '
    - counter += 1
  return tally_hash