HEXADECIMAL_CHARS = %w(0 1 2 3 4 5 6 7 8 9 a b c d e f)

def return_UUID
  uuid = ''
  loop do
    break if uuid.size == 32
    uuid << HEXADECIMAL_CHARS.sample
  end

  uuid.insert(8, '-')
  uuid.insert(13, '-')
  uuid.insert(18, '-')
  uuid.insert(23, '-')
end



# EXAMPLES/TEST CASES:
puts return_UUID # should return a random UUID number
puts return_UUID # should return a different UUID number
puts return_UUID
puts return_UUID
