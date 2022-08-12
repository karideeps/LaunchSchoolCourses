def multiples_3(array)
  array.map do |sub_array|
    sub_array.reject do |integer|
      integer % 3 != 0
    end
  end
end

# EXAMPLES/TEST CASES: should print `true` to the screen
arr = [[2], [3, 5, 7], [9], [11, 13, 15]]
puts multiples_3(arr) == [[], [3], [9], [15]]
