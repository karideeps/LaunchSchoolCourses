def foo(param = 'no')
  "yes"
end

def bar(param = 'no')
  param == "no" ? "yes" : "no"
end

puts bar(foo) 

# will print "no" to screen
# foo returns "yes". The argument (even though it has a default value of "no") is not used in this method
# bar has a defalt value of "no", but the argument "yes" is given to it. "yes" != "no" so "no" will print

puts bar
# will print "yes" to screen