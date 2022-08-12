def dot_separated_ip_address?(input_string)
  dot_separated_words = input_string.split(".")
  boolean_array = dot_separated_words.map do |word|
    is_an_ip_number(word)
  end
  array_size == 4 && boolean_array.none?(false)
end