require 'yaml'
MESSAGES = YAML.load_file('rps_bonus_messages.yml')

WIN_CONDITIONS = {
  'rock' => ['lizard', 'scissors'],
  'paper' => ['rock', 'spock'],
  'scissors' => ['paper', 'lizard'],
  'lizard' => ['paper', 'spock'],
  'spock' => ['rock', 'scissors']
}
CHOICE = WIN_CONDITIONS.keys
WINS_REQUIRED = 5

def prompt(message)
  puts("=> #{message}")
end

def display_welcome
  prompt("#{MESSAGES['welcome']} #{WINS_REQUIRED}")
end

def display_round_number(round_number)
  prompt("#{MESSAGES['round_number']} #{round_number}")
end

def obtain_player_choice
  player_choice = nil
  loop do
    prompt(MESSAGES['obtain_player_choice'])
    player_choice = Kernel.gets().chomp().downcase
    break if valid_player_choice?(player_choice)
    prompt(MESSAGES['error_player_choice'])
  end
  player_choice
end

def valid_player_choice?(player_choice)
  true if player_choice.length == 1 && /[rpslo]/.match(player_choice)
end

def letter_to_choice(player_choice)
  case player_choice
  when 'r'
    CHOICE[0]
  when 'p'
    CHOICE[1]
  when 's'
    CHOICE[2]
  when 'l'
    CHOICE[3]
  when 'o'
    CHOICE[4]
  end
end

def display_choices(player_choice, computer_choice)
  prompt("#{MESSAGES['player_choice']} #{player_choice.upcase}")
  prompt("#{MESSAGES['computer_choice']} #{computer_choice.upcase}")
end

def round_winner(player_choice, computer_choice)
  if WIN_CONDITIONS[player_choice].include?(computer_choice)
    'player'
  elsif WIN_CONDITIONS[computer_choice].include?(player_choice)
    'computer'
  else
    'draw'
  end
end

def display_round_winner(round_winner)
  case round_winner
  when 'player'
    prompt(MESSAGES['round_winner_player'])
  when 'computer'
    prompt(MESSAGES['round_winner_computer'])
  when 'draw'
    prompt(MESSAGES['round_winner_tie'])
  end
end

def increment_score(round_winner, score_hash)
  case round_winner
  when 'player'
    score_hash[:player_score] += 1
  when 'computer'
    score_hash[:computer_score] += 1
  when 'draw'
    score_hash[:number_of_draws] += 1
  end
end

def display_score(score_hash)
  prompt("#{MESSAGES['player_score']} #{score_hash[:player_score]}")
  prompt("#{MESSAGES['computer_score']} #{score_hash[:computer_score]}")
  prompt("#{MESSAGES['number_of_draws']} #{score_hash[:number_of_draws]}")
end

def grand_winner(score_hash)
  if score_hash[:player_score] == WINS_REQUIRED
    'player'
  elsif score_hash[:computer_score] == WINS_REQUIRED
    'computer'
  end
end

def display_grand_winner(grand_winner, round_number)
  case grand_winner
  when 'player'
    prompt("#{round_number} #{MESSAGES['grand_winner_player']}")
  when 'computer'
    prompt("#{round_number} #{MESSAGES['grand_winner_computer']}")
  end
end

def obtain_play_again
  play_again = nil
  loop do
    prompt(MESSAGES['play_again?'])
    play_again = Kernel.gets().chomp().downcase
    break if valid_play_again?(play_again)
    prompt(MESSAGES['error_play_again'])
  end
  play_again
end

def valid_play_again?(play_again)
  %w(yes y no n).include?(play_again)
end

def play_again?(play_again)
  %w(yes y).include?(play_again)
end

loop do
  system('clear') || system('cls')
  display_welcome

  score_hash = {
    player_score: 0,
    computer_score: 0,
    number_of_draws: 0
  }

  round_number = 1

  loop do
    display_round_number(round_number)

    player_choice = letter_to_choice(obtain_player_choice)
    computer_choice = CHOICE.sample
    system('clear') || system('cls')
    display_choices(player_choice, computer_choice)

    who_won = round_winner(player_choice, computer_choice)

    display_round_winner(who_won)
    increment_score(who_won, score_hash)
    display_score(score_hash)

    prompt('-' * 75)

    grand_winner = grand_winner(score_hash)
    display_grand_winner(grand_winner, round_number)
    break if grand_winner

    round_number += 1
  end

  break unless play_again?(obtain_play_again)
end

prompt(MESSAGES['goodbye'])
