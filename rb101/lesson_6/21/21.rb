require 'io/console'

ROUNDS_NEEDED_TO_WIN = 2

CARD_VALUES = { '2' => 2, '3' => 3, '4' => 4, '5' => 5, '6' => 6,
                '7' => 7, '8' => 8, '9' => 9, '10' => 10, 'J' => 10,
                'Q' => 10, 'K' => 10, 'A' => 1 }

SUITS = %w(hearts diamonds clubs spades)

MAX_HAND_VALUE = 21

DEALER_STAY_VALUE = 17

def prompt(message)
  puts "=> #{message}"
end

def display_intro_message
  system 'clear'
  prompt "Welcome to 21!"
  if ROUNDS_NEEDED_TO_WIN == 1
    prompt "First to win #{ROUNDS_NEEDED_TO_WIN} round is the winner!"
  else
    prompt "First to win #{ROUNDS_NEEDED_TO_WIN} rounds is the winner!"
  end
end

def display_rules
  prompt "Rules: closest to 21 without going over wins the round."
end

def any_key_to_continue
  puts "Press any key to continue.."
  STDIN.getch
end

def initialize_shuffled_deck
  deck = []
  CARD_VALUES.keys.cycle(SUITS.size) do |card|
    deck << card
  end
  deck.shuffle
end

def deal_initial_hands!(deck, players_hand, dealers_hand)
  2.times do
    deal_card!(deck, players_hand)
    deal_card!(deck, dealers_hand)
  end
end

def deal_card!(deck, hand)
  hand << deck.shift
end

def display_round_number(round_number)
  system 'clear'
  prompt "ROUND: #{round_number}"
end

def display_hands_players_turn(dealers_hand, players_hand)
  display_hidden_dealers_hand(dealers_hand)
  display_players_hand(players_hand)
  display_line
end

def display_hands_dealers_turn(dealers_hand, players_hand)
  display_dealers_hand(dealers_hand)
  display_players_hand(players_hand)
  display_line
end

def display_hidden_dealers_hand(dealers_hand)
  if dealers_hand.size == 2
    prompt "Dealer has: #{dealers_hand[1]} and an unknown card"
  else
    prompt "Dealer has: #{dealers_hand[1..-1].join(', ')}, and an unknown card"
  end
end

def display_dealers_hand(dealers_hand)
  prompt "Dealer has: #{joinor(dealers_hand)}!" \
         " Total value: #{total_hand_value(dealers_hand)}"
end

def display_players_hand(players_hand)
  prompt "You have: #{joinor(players_hand)}!" \
         " Total value: #{total_hand_value(players_hand)}"
end

def display_line
  puts "-" * 25
end

def joinor(array, punctuation = ', ', conjunction = 'and') # can be refactored?
  case array.size
  when 1 then array.first
  when 2 then "#{array.first} #{conjunction} #{array.last}"
  else
    temp_array = array.clone
    temp_array[-1] = "#{conjunction} #{temp_array.last}"
    temp_array.join(punctuation)
  end
end

def acquire_players_move
  players_move = ''
  loop do
    prompt "Hit or stay? ('h' or 'hit' to hit; 's' or 'stay' to stay)"
    players_move = gets.chomp.downcase
    break if valid_players_move?(players_move)
    prompt "Valid choices are: 'h', 'hit', 's', or 'stay'!"
  end
  players_move.size == 1 ? letter_to_fullform(players_move) : players_move
end

def valid_players_move?(players_move)
  %w(h hit s stay).include?(players_move)
end

def letter_to_fullform(players_move)
  players_move == 'h' ? 'hit' : 'stay'
end

def total_hand_value(hand)
  value = hand.map { |card| CARD_VALUES[card] }.sum
  value += 10 if hand.include?('A') && value + 10 <= MAX_HAND_VALUE
  value
end

def busted?(hand)
  total_hand_value(hand) > MAX_HAND_VALUE
end

def round_result(players_hand, dealers_hand)
  if busted?(players_hand)
    'player busted'
  elsif busted?(dealers_hand)
    'dealer busted'
  elsif total_hand_value(players_hand) > total_hand_value(dealers_hand)
    'player won'
  elsif total_hand_value(dealers_hand) > total_hand_value(players_hand)
    'dealer won'
  else
    'tie'
  end
end

def display_round_result(result)
  case result
  when 'player busted'
    prompt "You busted, the dealer wins this round!"
  when 'dealer busted'
    prompt "Dealer busted, you win this round!"
  when 'player won'
    prompt "You won this round!"
  when 'dealer won'
    prompt "The dealer won this round!"
  when 'tie'
    prompt "This round was a tie!"
  end
end

def round_winner(players_hand, dealers_hand)
  if busted?(players_hand)
    'dealer'
  elsif busted?(dealers_hand)
    'player'
  elsif total_hand_value(players_hand) > total_hand_value(dealers_hand)
    'player'
  elsif total_hand_value(dealers_hand) > total_hand_value(players_hand)
    'dealer'
  else
    'tie'
  end
end

def update_score(scores, winner)
  case winner
  when 'tie'
    scores['tie'] += 1
  when 'player'
    scores['player'] += 1
  when 'dealer'
    scores['dealer'] += 1
  end
end

def display_scores(scores)
  prompt "Number of rounds you won: #{scores['player']}"
  prompt "Number of rounds dealer won: #{scores['dealer']}"
  prompt "Number of ties: #{scores['tie']}"
end

def grand_winner(scores)
  if scores['player'] == ROUNDS_NEEDED_TO_WIN
    'player'
  elsif scores['dealer'] == ROUNDS_NEEDED_TO_WIN
    'dealer'
  end
end

def display_grand_winner(winner)
  if winner == 'player'
    prompt "CONGRATULATIONS, you are the grand winner!"
  else
    prompt "The dealer is the grand winner! Better luck next time."
  end
end

def play_again?
  %w(y yes).include?(acquire_play_again_answer)
end

def acquire_play_again_answer
  answer = ''
  loop do
    prompt "Would you like to play again? " \
           "('yes' or 'y' to play again; 'no' or 'n' to exit)"
    answer = gets.chomp.downcase
    break if valid_play_again_answer?(answer)
    prompt "Invalid input! Valid enteries are 'yes', 'y', 'no', or 'n'"
  end
  answer
end

def valid_play_again_answer?(answer)
  %w(yes y no n).include?(answer)
end

def display_goodbye_message
  prompt "Thankyou for playing 21!"
end

loop do # main game loop
  display_intro_message
  display_rules
  any_key_to_continue

  scores = Hash.new(0)
  round_number = 1

  loop do # round loop
    deck = initialize_shuffled_deck
    players_hand = []
    dealers_hand = []
    deal_initial_hands!(deck, players_hand, dealers_hand)

    loop do # player's turn
      display_round_number(round_number)
      display_hands_players_turn(dealers_hand, players_hand)

      players_move = acquire_players_move
      deal_card!(deck, players_hand) if players_move == 'hit'
      break if busted?(players_hand) || players_move == 'stay'
    end

    loop do # dealer's turn
      display_round_number(round_number)
      display_hands_dealers_turn(dealers_hand, players_hand)

      break if busted?(players_hand) ||
               total_hand_value(dealers_hand) >= DEALER_STAY_VALUE

      prompt "Dealer is hiting!"
      any_key_to_continue
      deal_card!(deck, dealers_hand)
    end

    result = round_result(players_hand, dealers_hand)
    display_round_result(result)

    winner = round_winner(players_hand, dealers_hand)
    update_score(scores, winner)

    display_scores(scores)

    round_number += 1
    any_key_to_continue

    break if grand_winner(scores)
  end

  display_grand_winner(grand_winner(scores))
  break unless play_again?
end

display_goodbye_message
