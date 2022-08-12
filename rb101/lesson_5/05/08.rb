
def vowels(hash)
  vowels = ''

  hash.each do |key, array|

    array.each do |word|

      word.each_char do |char|
        vowels << char if %w(a e i o u).include?(char)
      end

    end

  end

  vowels
end



# EXAMPLES/TEST CASES:
hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}
puts vowels(hsh) == 'euiooueoeeao'
