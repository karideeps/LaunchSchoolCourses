def select_me(array)
  results_array = []
  array.each do |hash|

    temp_hash = hash.select do |k, v|

      v.all? do |int|
        int.even?
      end

    end

    results_array << temp_hash unless temp_hash.empty?
  end

  results_array
end


#EXAMPLES/TEST CASES: should print `true` to the screen
arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]
puts select_me(arr) == [{b: [2, 4, 6], d: [4]}, {e: [8], f: [6, 10]}]

