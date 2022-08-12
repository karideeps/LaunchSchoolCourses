def dot_separated_ip_address?(input_string)
  dot_separated_words = input_string.split(".")
  return false if dot_separated_words.size != 4

  while dot_separated_words.size > 0
    word = dot_separated_words.pop
    return false unless is_an_ip_number?(word)
  end

  true
end


def is_an_ip_number?(word)
  word.to_i >= 0 && word.to_i <= 225
end

puts dot_separated_ip_address?("22.2.2.2")      # true
puts dot_separated_ip_address?('227.2.2.2')     # false
puts dot_separated_ip_address?("-1.2.2.2.")     # false
puts dot_separated_ip_address?("2.2.2.2.2")     # false

