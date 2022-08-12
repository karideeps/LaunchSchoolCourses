def find_me(hash)
  results_array = []
  hash.each do |_, details|
    if details[:type] == 'fruit'
      results_array << details[:colors].map { |e| e.capitalize }
    else
      results_array << details[:size].upcase
    end
  end
  results_array
end


# EXAMPLES/TEST CASES: should print `true` to the screen
hsh = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

puts find_me(hsh) == [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

