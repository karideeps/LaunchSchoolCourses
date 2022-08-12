[1, 2, 3].any? do |num|
  puts num
  num.odd?
end

# blocks return value will be `true`, `false`, `true`.
# return value of `any?` will be `true`