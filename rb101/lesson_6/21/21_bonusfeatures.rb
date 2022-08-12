require 'io/console'

WINS_NEEDED = 5
MAX_HAND_VALUE = 21 # recommed values are 21, 31, 41, and 51
DEALER_STAY_VALUE = 17 # recommed values are 17, 27, 37, and 47

CARD_VALUES = { '2' => 2, '3' => 3, '4' => 4, '5' => 5, '6' => 6,
                '7' => 7, '8' => 8, '9' => 9, '10' => 10, 'J' => 10,
                'Q' => 10, 'K' => 10, 'A' => 11 }

SUITS = ['♣', '♥', '♠', '♦']

def prompt(message)
  puts "=> #{message}"
end

def display_intro_message
  system 'clear'
  prompt "Welcome to #{MAX_HAND_VALUE}!"
  prompt "First to win #{WINS_NEEDED} round(s) is the winner!"
  prompt "Closest to #{MAX_HAND_VALUE} without going over wins the round."
  prompt "A new deck will be used for every round."
  display_line
end

def display_line
  prompt "-" * 60
end

def any_key_to_continue
  prompt "Press any key to continue.."
  STDIN.getch
end

def initialize_shuffled_deck
  CARD_VALUES.keys.product(SUITS).shuffle
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
  prompt "ROUND: #{round_number}"
end

def display_dealers_hand(turn, dealers_hand, dealers_hand_value)
  if turn == 'player'
    prompt "Dealer has: An unknown card and #{dealers_hand[1].join}"
  else
    prompt "Dealer has: #{hand_and_value(dealers_hand, dealers_hand_value)}"
  end
end

def hand_and_value(hand, hand_value)
  "#{joinor(hand.map(&:join))}! Total value: #{hand_value}"
end

def joinor(array, punctuation = ', ', conjunction = 'and')
  case array.size
  when 1 then array.first
  when 2 then "#{array.first} #{conjunction} #{array.last}"
  else
    temp_array = array.clone
    temp_array[-1] = "#{conjunction} #{temp_array.last}"
    temp_array.join(punctuation)
  end
end

def display_players_hand(players_hand, players_hand_value)
  prompt "You have: #{hand_and_value(players_hand, players_hand_value)}"
end

def acquire_players_move
  players_move = ''
  loop do
    prompt "Hit or Stay? ('h' or 'hit' to hit; 's' or 'stay' to stay)"
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

def hand_value(hand)
  value = hand.map { |card| CARD_VALUES[card[0]] }.sum
  number_of_aces = hand.map { |card| card[0] }.count('A')

  number_of_aces.times do
    value -= 10 if value > MAX_HAND_VALUE
  end
  value
end

def busted?(hand_value)
  hand_value > MAX_HAND_VALUE
end

def round_result(players_hand_value, dealers_hand_value)
  if busted?(players_hand_value)
    :player_busted
  elsif busted?(dealers_hand_value)
    :dealer_busted
  elsif players_hand_value > dealers_hand_value
    :player_hand_higher
  elsif dealers_hand_value > players_hand_value
    :dealer_hand_higher
  else
    :tie
  end
end

def display_round_result(round_result)
  case round_result
  when :player_busted
    prompt "You busted, the dealer wins this round!"
  when :dealer_busted
    prompt "Dealer busted, you win this round!"
  when :player_hand_higher
    prompt "Your hand was higher so you won this round!"
  when :dealer_hand_higher
    prompt "The dealer's hand was higher so the dealer won this round!"
  when :tie
    prompt "This round was a tie!"
  end
end

def round_winner(round_result)
  if round_result == :dealer_busted || round_result == :player_hand_higher
    'player'
  elsif round_result == :player_busted || round_result == :dealer_hand_higher
    'dealer'
  else
    'tie'
  end
end

def update_score(scores, round_winner)
  case round_winner
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
  if scores['player'] == WINS_NEEDED
    'player'
  elsif scores['dealer'] == WINS_NEEDED
    'dealer'
  end
end

def display_grand_winner(grand_winner)
  if grand_winner == 'player'
    prompt "CONGRATULATIONS, you are the grand winner!"
  else
    prompt "The dealer is the grand winner... Better luck next time!"
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
  prompt "Thank you for playing #{MAX_HAND_VALUE}!"
end

loop do # main game loop
  display_intro_message
  any_key_to_continue

  scores = Hash.new(0)
  round_number = 1

  loop do # round loop
    deck = initialize_shuffled_deck
    players_hand = []
    dealers_hand = []

    deal_initial_hands!(deck, players_hand, dealers_hand)
    players_hand_value = hand_value(players_hand)
    dealers_hand_value = hand_value(dealers_hand)

    turn = 'player'

    loop do # player and dealer turn loop
      system 'clear'
      display_round_number(round_number)
      display_dealers_hand(turn, dealers_hand, dealers_hand_value)
      display_players_hand(players_hand, players_hand_value)
      display_line

      case turn
      when 'player'
        break if busted?(players_hand_value)
        players_move = acquire_players_move
        if players_move == 'hit'
          deal_card!(deck, players_hand)
          players_hand_value = hand_value(players_hand)
        elsif players_move == 'stay'
          turn = 'dealer'
          next
        end

      when 'dealer'
        break if dealers_hand_value >= DEALER_STAY_VALUE
        prompt 'Dealer is hitting!'
        any_key_to_continue
        deal_card!(deck, dealers_hand)
        dealers_hand_value = hand_value(dealers_hand)
      end
    end

    result = round_result(players_hand_value, dealers_hand_value)
    display_round_result(result)

    update_score(scores, round_winner(result))
    display_scores(scores)

    round_number += 1
    any_key_to_continue

    break if grand_winner(scores)
  end

  display_grand_winner(grand_winner(scores))
  break unless play_again?
end

display_goodbye_message
