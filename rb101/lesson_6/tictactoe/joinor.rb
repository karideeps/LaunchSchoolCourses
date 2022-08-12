def joinor(array, punctuation = ', ', joining_word = 'or')
  case array.size
  when 1 then array[0].to_s
  when 2 then "#{array[0]} #{joining_word} #{array[1]}"
  else
    array[-1] = "#{joining_word} #{array[-1]}"
    array.join("#{punctuation}")
  end
end

# EXAMPLES/TEST CASES:
puts joinor([1]) == "1"
puts joinor([1, 2]) == "1 or 2"
puts joinor([1, 2, 3]) == "1, 2, or 3"
puts joinor([1, 2, 3], '; ') == "1; 2; or 3"
puts joinor([1, 2, 3], ', ', 'and') == "1, 2, and 3"
