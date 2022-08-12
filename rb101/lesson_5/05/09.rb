def sort_descend(array)
  array.map do |array|
    array.sort do |a, b|
      b <=> a
    end
  end
end


# EXAMPLES/TEST CASES: prints `true` to the screen
arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]
puts sort_descend(arr) == [['c', 'b', 'a'], [3, 2, 1], ['green', 'blue', 'black']]

