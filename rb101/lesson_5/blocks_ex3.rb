[[1, 2], [3, 4]].map do |arr|
  puts arr.first
  arr.first
end

# LINE
# ACTION
# OBJECT
# SIDE EFFECT
# RETURN VALUE
# IS RETURN VALUE USED?

# LINE: 1
# ACTION: method call `map`
# OBJECT: outer array
# SIDE EFFECT: no
# RETURN VALUE: [1, 3]
# IS RETURN VALUE USED?: No

# LINE: 1 - 4
# ACTION: block execution
# OBJECT: Each sub array
# SIDE EFFECT: none
# RETURN VALUE: 1 and then 3
# IS RETURN VALUE USED? Yes,it is used by `map` function

# LINE: 2
# ACTION: puts
# OBJECT: element at index 0 of sub array
# SIDE EFFECT: outputs a string representation of integer
# RETURN VALUE: nil
# IS RETURN VALUE USED?: no

# LINE: 2
# ACTION: method call `first`
# OBJECT: sub array
# SIDE EFFECT: no
# RETURN VALUE: element at index 0 of sub array (1 and then 3)
# IS RETURN VALUE USED?: yes, used by `puts`

# LINE: 3
# ACTION: method call `first`
# OBJECT: sub array
# SIDE EFFECT: no
# RETURN VALUE: element at index 0 of sub array (1 and then 3)
# IS RETURN VALUE USED? yes, used by `map`