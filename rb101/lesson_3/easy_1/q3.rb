# advice = "Few things in life are as important as house training your pet dinosaur."
# advice = advice.split
# index = advice.index("important")
# advice[index] = "urgent"
# advice = advice.join(' ')

#OR use gsub... lol
advice = "Few things in life are as important as house training your pet dinosaur."
advice.gsub!("important", "urgent")

puts advice # Prints "Few things in life are as urget as house training your pet dinosaur."
