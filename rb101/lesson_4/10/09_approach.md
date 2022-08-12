UNDERSTAND THE PROBLEM:
- input: string
- output: string
- rules:
  - first letter of each word of the string should be capitalized

EXAMPLES
words = "the flintstones rock"
titleize(words)
words = "The Flintstones Rock"

ALGORITHM:
- define titleize
  - split words into an array of words
  - caplitalize the start of each word
  - join array of words back together
  