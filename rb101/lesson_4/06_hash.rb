produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'brocolli' => 'Vegetable'
}

def select_fruit(produce)
  produce_array = produce.keys
  count = 0
  fruit_hash = {}

  loop do
    if produce[produce_array[count]] == 'Fruit'
      fruit_hash[produce_array[count]] = 'Fruit'
    end
    
    count += 1
    break if count == produce_array.size
  end

  fruit_hash
end

puts select_fruit(produce) # => {"apple"=>"Fruit", "pear"=>"Fruit"}

