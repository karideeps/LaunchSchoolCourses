def hash_me(array)
  result_hash = {}
  array.each do |sub_array|
    result_hash[sub_array[0]] = sub_array[1]
  end
  result_hash
end


# EXAMPLES/TEST CASES: should print `true` to the screen
arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
puts hash_me(arr) == {:a=>1, "b"=>"two", "sea"=>{:c=>3}, {:a=>1, :b=>2, :c=>3, :d=>4}=>"D"}

