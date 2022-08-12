def fun_with_ids
  a_outer = 42
  b_outer = "forty two"
  c_outer = [42]
  d_outer = c_outer[0]

  a_outer_id = a_outer.object_id
  b_outer_id = b_outer.object_id
  c_outer_id = c_outer.object_id
  d_outer_id = d_outer.object_id

  puts "a_outer is #{a_outer} with an id of: #{a_outer_id} before the block." # 42 and object ID of a_outer
  puts "b_outer is #{b_outer} with an id of: #{b_outer_id} before the block." # "forty two" and object ID of b_outer
  puts "c_outer is #{c_outer} with an id of: #{c_outer_id} before the block." # "[42] and object ID of c_outer(the array). c_outer[0] has a different object ID."
  puts "d_outer is #{d_outer} with an id of: #{d_outer_id} before the block." # 42 and object ID of c_outer[0] (i.e., the object_ID of the first element of c_outer)
  puts

  1.times do
    a_outer_inner_id = a_outer.object_id
    b_outer_inner_id = b_outer.object_id
    c_outer_inner_id = c_outer.object_id
    d_outer_inner_id = d_outer.object_id

    puts "a_outer id was #{a_outer_id} before the block and is: #{a_outer_inner_id} inside the block." # both object ID's are the same
    puts "b_outer id was #{b_outer_id} before the block and is: #{b_outer_inner_id} inside the block." # both object ID's are the same (unless the only reason above was same was becasue numbers are not mutable)
    puts "c_outer id was #{c_outer_id} before the block and is: #{c_outer_inner_id} inside the block." # both object ID's are the same
    puts "d_outer id was #{d_outer_id} before the block and is: #{d_outer_inner_id} inside the block." # both object ID's are 100% the same
    puts

    a_outer = 22
    b_outer = "thirty three"
    c_outer = [44]
    d_outer = c_outer[0]

    puts "a_outer inside after reassignment is #{a_outer} with an id of: #{a_outer_id} before and: #{a_outer.object_id} after." # 22 both ID's are different
    puts "b_outer inside after reassignment is #{b_outer} with an id of: #{b_outer_id} before and: #{b_outer.object_id} after." # "thirty three" both ID's are different
    puts "c_outer inside after reassignment is #{c_outer} with an id of: #{c_outer_id} before and: #{c_outer.object_id} after." # [44] both ID's are different
    puts "d_outer inside after reassignment is #{d_outer} with an id of: #{d_outer_id} before and: #{d_outer.object_id} after." # 44 borth ID's are different 
    puts


    a_inner = a_outer # 22
    b_inner = b_outer # "thirty three"
    c_inner = c_outer # [44]
    d_inner = c_inner[0] # 44

    a_inner_id = a_inner.object_id
    b_inner_id = b_inner.object_id
    c_inner_id = c_inner.object_id
    d_inner_id = d_inner.object_id

    puts "a_inner is #{a_inner} with an id of: #{a_inner_id} inside the block (compared to #{a_outer.object_id} for outer)." # 22 both ID's are the same
    puts "b_inner is #{b_inner} with an id of: #{b_inner_id} inside the block (compared to #{b_outer.object_id} for outer)." # "thrity three" both ID's are the same
    puts "c_inner is #{c_inner} with an id of: #{c_inner_id} inside the block (compared to #{c_outer.object_id} for outer)." # [44] borth ID's are the same
    puts "d_inner is #{d_inner} with an id of: #{d_inner_id} inside the block (compared to #{d_outer.object_id} for outer)." # 44 borth ID's are the same
    puts
  end

  puts "a_outer is #{a_outer} with an id of: #{a_outer_id} BEFORE and: #{a_outer.object_id} AFTER the block." # 22 both ID's are different
  puts "b_outer is #{b_outer} with an id of: #{b_outer_id} BEFORE and: #{b_outer.object_id} AFTER the block." # "thirty three" both ID's are different
  puts "c_outer is #{c_outer} with an id of: #{c_outer_id} BEFORE and: #{c_outer.object_id} AFTER the block." # [44] both ID's are different
  puts "d_outer is #{d_outer} with an id of: #{d_outer_id} BEFORE and: #{d_outer.object_id} AFTER the block." # 44 both ID's are different
  puts

  puts "a_inner is #{a_inner} with an id of: #{a_inner_id} INSIDE and: #{a_inner.object_id} AFTER the block." rescue puts "ugh ohhhhh" # error, a_inner was defined inside the block
  puts "b_inner is #{b_inner} with an id of: #{b_inner_id} INSIDE and: #{b_inner.object_id} AFTER the block." rescue puts "ugh ohhhhh" # error, b_inner was defined inside the block
  puts "c_inner is #{c_inner} with an id of: #{c_inner_id} INSIDE and: #{c_inner.object_id} AFTER the block." rescue puts "ugh ohhhhh" # error, c_inner was defined inside the block
  puts "d_inner is #{d_inner} with an id of: #{d_inner_id} INSIDE and: #{d_inner.object_id} AFTER the block." rescue puts "ugh ohhhhh" # error, d_inner was defined inside the block
end

fun_with_ids