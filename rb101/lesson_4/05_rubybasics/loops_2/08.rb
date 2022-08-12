number = 0

until number == 10
  number += 1
  next if number % 2 != 0
  puts number
end

# next had to be place after the incrementation of the number
# and before #puts so we can check if the number is odd before
# we print it