# get loan amount from user
# get apr from user
# get loan duration in years from user

# calculate `monthly_interest_rate` = apr / 12
# calculate `loan_duration_months` = `loan_duration_years * 12`
# calculate `monthly_payment(loan_amount, monthly_interest_rate, loan_duration_months)`

def calculate_monthly_rate(apr):
    return (apr / 100) / 12

def calculate_monthly_payment(loan_amount, monthly_interest_rate, loan_duration_months):
    return loan_amount * (monthly_interest_rate / (1 - (1 + monthly_interest_rate) ** (-loan_duration_months)))

loan_amount = input("Enter loan amount: ")
loan_amount = float(loan_amount)

apr = input("Input APR: ")
apr = float(apr)

loan_duration_years = input("Enter loan duration: ")
loan_duration_years = int(loan_duration_years)

monthly_interest_rate = calculate_monthly_rate(apr)
loan_duration_months = loan_duration_years * 12

monthly_payment = calculate_monthly_payment(loan_amount, monthly_interest_rate, loan_duration_months)

print(f"{monthly_payment:.2f}")




























