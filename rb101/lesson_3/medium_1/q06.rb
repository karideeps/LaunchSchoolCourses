answer = 42

def mess_with_it(some_number)
  some_number += 8
end

new_answer = mess_with_it(answer)

p answer - 8 # 34 is the answer becase += is an assignment operator that does not mutate the caller.