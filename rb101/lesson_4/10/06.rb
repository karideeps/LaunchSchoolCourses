
def shorten(array)
  short_form = []
  counter = 0

  loop do
    break if counter == array.size
    short_form << array[counter][0,3]
    counter += 1
  end

  short_form
end

# EXAMPLES/TEST CASES: all should print `true` to screen
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
puts shorten(flintstones) == %w(Fre Bar Wil Bet Bam Peb)
