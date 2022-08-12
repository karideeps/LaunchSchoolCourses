my_numbers = [1, 4, 3, 7, 2, 6]

def double_odd_index(numbers_array)
  result_array = []
  counter = 0

  loop do
    break if counter == numbers_array.size
    current_number = numbers_array[counter]
    if counter % 2 != 0
      result_array << current_number *= 2
    else
      result_array << current_number
    end
    counter += 1
  end

  result_array
end

print double_odd_index(my_numbers) # [1, 8, 3, 14, 2, 12]