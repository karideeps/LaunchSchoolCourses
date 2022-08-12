UNDERSTAND THE PROBLEM:
- input: string "Few things in life are as important as house training your pet dinosaur"
- output: replace "important" with "urgent"

EXAMPLES/TEST CASES
puts advice # Prints "Few things in life are as urget as house training your pet dinosaur."

DATA STRUCTURES:
- input: string
- middle: array
- output: string

ALGORITHM:
- split sentence into an array containing individual words
- Find index of word "important"
- Assign "urgent" to that index. This should mutate advice
- join array using a space

