UNDERSTAND THE PROBLEM:
- input: hash
- output: string
- rules:
  - using `#each` output all the vowels from the string 

EXAMPLES/TEST CASES:
hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}
vowels(hsh) == 'euiooueoeezo'

APPROACH
- define `vowels()` that takes a `hash` as an argument
  - initialize `vowels` to an empty string
  - for each value of `hash`
    - for each element of the array
      - for each char of the string
        - add to `vowels` if it is a vowel