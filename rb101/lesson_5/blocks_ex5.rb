[[1, 2], [3, 4]].map do |arr|
  arr.map do |num|
    num * 2
  end
end

# [[2, 4], [6, 8]]

# LINE: 1
# ACTION: method call `map`
# OBJECT: array [[1, 2], [3, 4]]
# SIDE EFFECT: transforms [[1, 2], [3, 4]] into [[2, 4], [6, 8]]
# RETURN VALUE:[[2, 4], [6, 8]]
# IS RETURN VALUE USED?: yes, return value is used to transform [[1, 2], [3, 4]] into [[2, 4], [6, 8]]

# LINE: 1 - 5
# ACTION: block execultion
# OBJECT: each sub array [1,2] and [3,4] respectively
# SIDE EFFECT: no
# RETURN VALUE: [[2, 4], [6, 8]]
# IS RETURN VALUE USED?: yes, return value is used by `map` method

# LINE: 2
# ACTION: method call `map`
# OBJECT: sub array [1, 2] and [3, 4]
# SIDE EFFECT: transforms each array [1, 2] and [3, 4] into [2, 4] and [6, 8] respectively
# RETURN VALUE: [2, 4] and [6, 8]
# IS RETURN VALUE USED?: yes, to change the value of arr

# LINE: 2 - 4
# ACTION: block execution
# OBJECT: each element of sub array 1 and 2 and then 3 and 4
# SIDE EFFECT: no
# RETURN VALUE: 2 and 4 and then 6 and 8
# IS RETURN VALUE USED?: yes, used by method call `map`

# LINE: 3
# ACTION: multiplication operator `*`
# OBJECT: each element of the subarray
# SIDE EFFECT: no
# RETURN VALUE: 2, 4, 6, 8
# IS RETURN VALUE USED?: yes, used by method call `map`
