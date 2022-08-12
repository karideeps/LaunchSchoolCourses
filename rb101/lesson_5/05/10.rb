def increment(array)
  array.map do |hash|
    hash.to_a.each {|array| array[1] += 1}.to_h
  end
end


# EXAMPLES / TEST CASES: should print `true` to screen
arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]
puts increment(arr) == [{a: 2}, {b: 3, c: 4}, {d: 5, e: 6, f:7}]

