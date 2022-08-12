require 'yaml'
MESSAGES = YAML.load_file('loan_calculator_messages.yml')

def prompt(message)
  Kernel.puts("=> #{message}")
end

def acquire_loan_amount
  loan_amount = nil
  loop do
    prompt(MESSAGES['acquire_loan_amount'])
    loan_amount = Kernel.gets().chomp()
    break if valid_loan_amount?(loan_amount)
    prompt(MESSAGES['error_loan_amount'])
  end
  loan_amount
end

def valid_loan_amount?(loan_amount)
  /\d/.match(loan_amount) && /^\d*\.?\d*$/.match(loan_amount)
end

def acquire_apr
  apr = nil
  loop do
    prompt(MESSAGES['acquire_apr'])
    apr = Kernel.gets().chomp()
    break if valid_apr?(apr)
    prompt(MESSAGES['error_apr'])
  end
  apr
end

def valid_apr?(apr)
  /\d/.match(apr) && /^\d*\.?\d*$/.match(apr) && apr.to_f != 0
end

def acquire_loan_duration_years
  loan_duration_years = nil
  loop do
    prompt(MESSAGES['acquire_loan_duration_years'])
    loan_duration_years = Kernel.gets().chomp()
    break if valid_loan_duration?(loan_duration_years)
    prompt(MESSAGES['error_loan_duration'])
  end
  loan_duration_years
end

def valid_loan_duration?(loan_duration_years)
  /^\d+$/.match(loan_duration_years) && loan_duration_years.to_i != 0
end

def calculate_monthly_payment(p, j, n)
  p * (j / (1 - (1 + j)**-n))
end

def display_monthly_interest(monthly_interest_percent)
  prompt("#{MESSAGES['monthly_interest']}" \
         " #{format('%02.2f', monthly_interest_percent)}%")
end

def display_monthly_payment(monthly_payment)
  prompt("#{MESSAGES['monthly_payment']}" \
         " $#{format('%02.2f', monthly_payment)}!")
end

def display_total_payments(loan_duration_months)
  prompt("#{MESSAGES['total_payments']} #{loan_duration_months}")
end

def display_total_paid(total_paid)
  prompt("#{MESSAGES['total_paid']} $#{format('%02.2f', total_paid)}")
end

def acquire_play_again_answer
  play_again_answer = nil
  loop do
    prompt(MESSAGES['play_again'])
    play_again_answer = Kernel.gets().chomp()
    break if valid_play_again_answer?(play_again_answer)
    prompt(MESSAGES['play_again_error'])
  end
  play_again_answer
end

def valid_play_again_answer?(play_again_answer)
  if play_again_answer.downcase == 'yes' ||
     play_again_answer.downcase == 'y' ||
     play_again_answer.downcase == 'no' ||
     play_again_answer.downcase == 'n'
    true
  else
    false
  end
end

def play_again?(play_again_answer)
  if play_again_answer.downcase == 'yes' || play_again_answer.downcase == 'y'
    true
  else
    false
  end
end

loop do # main loop
  prompt(MESSAGES['welcome'])

  loan_amount = acquire_loan_amount().to_f
  apr = acquire_apr().to_f
  loan_duration_years = acquire_loan_duration_years().to_i
  loan_duration_months = loan_duration_years * 12
  monthly_interest = (apr / 100) / 12
  monthly_interest_percent = monthly_interest * 100
  monthly_payment = calculate_monthly_payment(loan_amount,
                                              monthly_interest,
                                              loan_duration_months)
  total_paid = monthly_payment * loan_duration_months

  display_monthly_interest(monthly_interest_percent)
  display_monthly_payment(monthly_payment)
  display_total_payments(loan_duration_months)
  display_total_paid(total_paid)

  break unless play_again?(acquire_play_again_answer)
  system('clear') || system('cls')
end

prompt(MESSAGES['goodbye'])
