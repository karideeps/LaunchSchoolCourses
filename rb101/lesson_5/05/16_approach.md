UNDERSTAND THE PROBLEM:
- input: no
- output: string
- rules:
  - string should be contain x number of chars seperated by a hyphen
    - 8-4-4-4-12
  - each character should be hexadecimal i.e. (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F)

EXAMPLES/TEST CASES:
puts return_UUID # should return a random UUID number
puts return_UUID # should return a different UUID number
puts return_UUID
puts return_UUID

APPROACH
- initialize `HEXADECIMAL_CHARS` to %w(0 1 2 3 4 5 6 7 8 9 a b c d e f)

- define `return_UUID()` that takes no arguments
  - initialize `uuid` to an empty string
  - begin loop
    - break if uuid.size == 32
    - uuid << HEXADEICAL_CHARS.sample

  - uuid.insert(8, '-')
  - uuid.insert(13, '-')
  - uuid.insert(18, '-')
  - uuid.insert(23, '-')