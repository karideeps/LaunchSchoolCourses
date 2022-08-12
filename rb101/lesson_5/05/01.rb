def descend(array)
  array.sort do |a, b|
    b.to_i <=> a.to_i
  end
end

# EXAMPLES AND TEST CASES: should print `true` to screen
arr = ['10', '11', '9', '7', '8']
puts descend(arr) == ['11', '10', '9', '8', '7']
