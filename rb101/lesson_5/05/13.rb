def sort_me(array)
  array.sort_by do |sub_array|
    sub_array.select do |element|
      element.odd?
    end
  end
end

# EXAMPLES/TEST CASES: should print `true` to the screen
arr = [[1, 6, 7], [1, 4, 9], [1, 8, 3]]
puts sort_me(arr) == [[1, 8, 3], [1, 6, 7], [1, 4, 9]]

