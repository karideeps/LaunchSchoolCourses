[{ a: 'ant', b: 'elephant' }, { c: 'cat' }].select do |hash|
  hash.all? do |key, value|
    value[0] == key.to_s
  end
end
# => [{ :c => "cat" }]


# LINE: 1
# ACTION: method call `select`
# OBJECT: array
# SIDE EFFECT: no
# RETURN VALUE: array displayed on line 6
# IS RETURN VALUE USED?: no

# LINE: 1 - 5
# ACTION: outer block execution
# OBJECT: each hash of outer array
# SIDE EFFECT: no
# RETURN VALUE: true or false
# IS RETURN VALUE USED?: yes, used by `select` method

# LINE: 2
# ACTION: method call `all?`
# OBJECT: each hash of outer array
# SIDE EFFECT: no
# RETURN VALUE: true or false
# IS RETURN VALUE USED?: yes, it is the return value of the outer block

# LINE: 2 - 4
# ACTION: inner block execution
# OBJECT: each key value pair
# SIDE EFFECT: no
# RETURN VALUE: true or false
# IS RETURN VALUE USED?: yes, used by method `all?`

# LINE: line 3
# ACTION: comparitive operator `==`
# OBJECT: element at value[0]
# SIDE EFFECT: none 
# RETURN VALUE:true or false
# IS RETURN VALUE USED?:  yes, return value of inner block

# using `any?` instead of `all?` will return the original array as a new array
# => [{ a: 'ant', b: 'elephant' }, { c: 'cat' }]