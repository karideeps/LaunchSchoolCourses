def joinor(array, punctuation = ', ', conjunction = 'and')
  case array.size
  when 1 then array.first
  when 2 then "#{array.first} #{conjunction} #{array.last}"
  else
    array[-1] = "#{conjunction} #{array.last}"
    array.join(punctuation)
  end
end




# EXAMPLES/TEST CASES all should print `true` to the screen
puts joinor(['A', 'J']) == 'A and J'
puts joinor(['A']) == 'A'
puts joinor(['A', 'J', 'Q']) == 'A, J, and Q'