[1, 2, 3].select do |num|
  num > 5
  'hi'
end

# returns [1, 2, 3], because the last line of the block 'hi' evaluates to `true`
# select returns a new array containing elements of the initial array whose block
# value returns `true`