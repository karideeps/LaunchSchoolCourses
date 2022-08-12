my_arr = [[18, 7], [3, 12]].each do |arr|
  arr.each do |num|
    if num > 5
      puts num
    end
  end
end

# 18
# 7
# 12

# [[18, 7], [3, 12]]
# my_arr == [[18, 7], [3, 12]]

# LINE:
# ACTION:
# OBJECT:
# SIDE EFFECT:
# RETURN VALUE:
# IS RETURN VALUE USED?:

# LINE: 1
# ACTION: assignment operator `=`
# OBJECT: n/a
# SIDE EFFECT: assigns value `[[18, 7], [3, 12]]` to variable `my_arr`
# RETURN VALUE: [[18, 7], [3, 12]]
# IS RETURN VALUE USED?: no

# LINE: 1
# ACTION: method call `each`
# OBJECT: outer array
# SIDE EFFECT: none
# RETURN VALUE: [[18, 7], [3, 12]]
# IS RETURN VALUE USED?: yes, return value is used by assignement operator `=`

# LINE: 1 - 7
# ACTION: block execultion
# OBJECT: each sub array
# SIDE EFFECT: no
# RETURN VALUE: each sub-array
# IS RETURN VALUE USED?: no

# LINE: 2
# ACTION: method call `each`
# OBJECT: sub array
# SIDE EFFECT: no
# RETURN VALUE: sub array
# IS RETURN VALUE USED?: yes to dertermine value of outer block

# LINE: 2 - 6
# ACTION: block execuation 
# OBJECT: each integer of sub array
# SIDE EFFECT: none
# RETURN VALUE: nil
# IS RETURN VALUE USED?: no

# LINE: 3 - 5
# ACTION: conditional if
# OBJECT: number
# SIDE EFFECT: no
# RETURN VALUE: nil
# IS RETURN VALUE USED?: no

# LINE: 3 
# ACTION: comparable operator `>`
# OBJECT: number
# SIDE EFFECT: no
# RETURN VALUE: returns true or false
# IS RETURN VALUE USED?: yes, used by `if` conditional

# LINE: 4
# ACTION: method call puts
# OBJECT: number of sub index
# SIDE EFFECT: prints number to screen
# RETURN VALUE: nil
# IS RETURN VALUE USED?: yes, used to dertermine return value of inner block

