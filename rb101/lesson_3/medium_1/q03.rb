=begin
def factors(number)
  divisor = number
  factors = []
  begin
    factors << number / divisor if number % divisor == 0
    divisor -= 1
  end until divisor == 0
  factors
end
=end

#altered code now handles 0 and negative numbers
def factors(number)
  divisor = number
  factors = []
  while divisor > 0
    factors << number / divisor if number % divisor == 0
    divisor -= 1
  end
  factors
end

p factors(10)
p factors(5)
p factors(0)
p factors(-5)

# Bonus 1
  # The purpose of number % divisor == 0 is to find out factors of a number (i.e., remainder of 0)

# Bonus 2
  # This is so that the method call will return an array of integers