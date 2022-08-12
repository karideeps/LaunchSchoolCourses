[1, 2, 3].map do |num|
  if num > 1
    puts num
  else
    num
  end
end

# returns [1, nil, nil]
# prints 2 and 3 to screen on seperate lines