require 'yaml'
MESSAGES = YAML.load_file('calculator_bonus_messages.yml')

puts MESSAGES.inspect

def prompt(message)
  Kernel.puts("=> #{message}")
end

def valid_number?(number)
  !(number =~ /[[:alpha:]]/)
end

def operation_to_message(op)
  case op
  when '1'
    return 'Adding'
  when '2'
    return 'Subtracting'
  when '3'
    return 'Multiplying'
  when '4'
    return 'Dividing'
  end
end

name = 'nil'
loop do
  prompt(MESSAGES['name'])
  name = Kernel.gets().chomp()

  if name.empty?()
    prompt(MESSAGES['empty_name'])
  else
    break
  end
end

prompt("Hi #{name}")

loop do # main loop
  prompt(MESSAGES['welcome'])

  number1 = nil
  loop do
    prompt(MESSAGES['for_number1'])
    number1 = Kernel.gets().chomp()

    if valid_number?(number1)
      break
    else
      prompt(MESSAGES['input_not_valid'])
    end
  end

  number2 = nil
  loop do
    prompt(MESSAGES['for_number2'])
    number2 = Kernel.gets().chomp()
    if valid_number?(number2)
      break
    else
      prompt(MESSAGES['input_not_valid'])
    end
  end

  operator_prompt = <<-MSG
    What operation would you like to perform?
    1) add
    2) subtract
    3) mulitpy
    4) divide
  MSG

  prompt(operator_prompt)
  operator = nil
  loop do
    operator = Kernel.gets().chomp()

    if %w(1 2 3 4).include?(operator)
      break
    else
      prompt(MESSAGES['valid_operator'])
    end
  end

  prompt("#{operation_to_message(operator)} your two numbers!")

  result = case operator
           when '1'
             number1.to_f() + number2.to_f()
           when '2'
             number1.to_f() - number2.to_f()
           when '3'
             number1.to_f() * number2.to_f()
           when '4'
             number1.to_f() / number2.to_f()
           end

  prompt("The result is #{result}")

  prompt(MESSAGES['another_calculation'])
  answer = Kernel.gets().chomp()
  break unless answer.downcase().start_with?('y')
end

prompt(MESSAGES['goodbye'])
