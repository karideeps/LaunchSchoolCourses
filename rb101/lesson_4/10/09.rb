
def titleize(string)

  string.split.each{|word| word.capitalize!}.join(' ')
end



# EXAMPLES
words = "the flintstones rock"
words = titleize(words)
puts words == "The Flintstones Rock"
