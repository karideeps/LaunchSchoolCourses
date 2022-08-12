my_numbers = [1, 4, 3, 7, 2, 6]

def multiply(numbers_array, operand)
  results_array = []
  counter = 0

  loop do
    break if counter == numbers_array.size

    results_array << numbers_array[counter] *= operand
    counter += 1
  end

  results_array
end

print multiply(my_numbers, 3) # [3, 12, 9, 21, 6, 8]