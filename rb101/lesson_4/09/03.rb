[1, 2, 3].reject do |num|
  puts num
end

# [1, 2, 3]

# because the return value of all blocks is `nil`, and therefore not `true`
