['ant', 'bear', 'cat'].each_with_object({}) do |value, hash|
  hash[value[0]] = value
end

# {"ant"=>"ant", "ant"=>"bear", "ant"=>"cat"}
# WRONG!

#{"a"=>"ant", "b"=>"bear", "c"=>"cat"}