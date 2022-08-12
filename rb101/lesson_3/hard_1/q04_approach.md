UNDERSTAND THE PROBLEM:
- input: string
- output: boolean (true or false)
- split input string at 'dots'
- false if:
  - if more than 4 sections OR
  - `is_an_ip_number?` is false for any section
- HAVE to use a while loop

EXAMPLES / TEST CASES:
- none given

DATA STRUCTURES:
- input: string
- middle: array, string

ALGORITHM:
- split string at dot and assign it to an array
- return false if array.size is NOT equal to 4
- while array.size > 0
  - remove last element of array and assign it to a variable
  - check if `is_an_ip_number?` returns true or false with variable
  - if true next
  - return false
- return true