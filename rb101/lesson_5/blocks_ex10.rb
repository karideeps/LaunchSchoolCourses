[[[1, 2], [3, 4]], [5, 6]].map do |arr|
  arr.map do |el|
    if el.to_s.size == 1    # it's an integer
      el + 1
    else                    # it's an array
      el.map do |n|
        n + 1
      end
    end
  end
end

# => [[[2, 3], [4, 5]], [6, 7]]

# LINE: 1
# ACTION: method call `map`
# OBJECT: outer array
# SIDE EFFECT: no
# RETURN VALUE: [[[2, 3], [4, 5]], [6, 7]]
# IS RETURN VALUE USED?: no

# LINE: 1- 11
# ACTION: outer block execution
# OBJECT: each sub array [[1, 2], [3,4]] and [5, 6]
# SIDE EFFECT: none
# RETURN VALUE:[[[2, 3], [4, 5]], [6, 7]]
# IS RETURN VALUE USED?: yes, used by outer method `map`

# LINE: 2
# ACTION: method call `map`
# OBJECT: sub arrays [[1, 2], [3, 4]] and [5, 6]
# SIDE EFFECT: none
# RETURN VALUE: [[2, 3], [4, 5]] and [6, 7]
# IS RETURN VALUE USED?: yes, used by outer block

# LINE: 2 - 10
# ACTION: inner block execution
# OBJECT: each sub array of outer array [[1, 2], [3, 4]] and [5, 6]
# SIDE EFFECT: none 
# RETURN VALUE: integer or array depending of if condition is met
# IS RETURN VALUE USED?: yes, used by inner map method

# LINE: 3
# ACTION: conditional if
# OBJECT: each sub array of outer array [[1, 2], [3, 4]] and [5, 6]
# SIDE EFFECT: no
# RETURN VALUE: nil
# IS RETURN VALUE USED?: no

# LINE: 3
# ACTION: method call 'to_s'
# OBJECT: each sub array of outer array [[1, 2], [3, 4]] and [5, 6]
# SIDE EFFECT: no
# RETURN VALUE: string version of integer or array
# IS RETURN VALUE USED?: yes, used by method `size`

# LINE: 3
# ACTION: method call size
# OBJECT: string returned by `to_s`
# SIDE EFFECT: none
# RETURN VALUE: integer
# IS RETURN VALUE USED?: yes, used by comparision operator `==`

# LINE: 3
# ACTION: comparitive operator `==`
# OBJECT: integer value returned by `String#size`
# SIDE EFFECT: no
# RETURN VALUE: true or false
# IS RETURN VALUE USED?: yes to evalue `if conditional`

# LINE: 4
# ACTION: addition operator `+`
# OBJECT: integer
# SIDE EFFECT: no
# RETURN VALUE: integer
# IS RETURN VALUE USED?: yes, return value of if else conditional

# LINE: 6
# ACTION: method call `map`
# OBJECT: each sub array of the sub array
# SIDE EFFECT: no
# RETURN VALUE: [[2, 3], [4, 5]]
# IS RETURN VALUE USED?: yes, used as return value for if else conditional

# LINE: 6 - 8
# ACTION: inner most block execution
# OBJECT: each integer of sub array [1, 2] and then [3, 4]
# SIDE EFFECT: no
# RETURN VALUE: integer interated by 1
# IS RETURN VALUE USED?: yes, return value used by inner most map

# LINE: 7
# ACTION: additional operator `+`
# OBJECT: each integer of inner most array
# SIDE EFFECT: no 
# RETURN VALUE: integer
# IS RETURN VALUE USED?: yes, return value of inner most block
