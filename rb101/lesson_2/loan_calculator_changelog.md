1. Updated `valid_apr?` method to no longer accept a value of 0
2. Message updated in `loan_calculator_messages.yml` file to reflect this change
3. `acquire_loan_amount`, `acquire_apr`, `acquire_loan_duration_years` no longer use `break` to return user input
4. Variable names in `acquire_loan_amount`, `acquire_apr`, `acquire_loan_duration_years` updated to make be more reader friendly
5. `play_again` method has been split into 3 methods:
    - `acquire_play_again_answer` - returns user input after calling `valid_play_again_answer?` method
    - `valid_play_again_answer?` - validates user input given in `acquire_play_again_answer`
    - `play_again?` - returns a boolean (used to stay in or break out of main loop)
