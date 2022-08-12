my_numbers = [1, 4, 3, 7, 2, 6]

def double_numbers(my_numbers)
counter = 0

  loop do
    break if counter == my_numbers.size
    my_numbers[counter] *= 2
    counter += 1
  end

end

print my_numbers
double_numbers(my_numbers)
print my_numbers