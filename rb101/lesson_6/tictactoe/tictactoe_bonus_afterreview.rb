require 'io/console'

WINNING_TOTAL = 5
FIRST_PLAYER = 'choose' # valid enteries are 'choose', 'player', or 'computer'

INITIAL_MARKER = " "
PLAYER_MARKER = "X"
COMPUTER_MARKER = "O"

BOARD_LENGTH = 17
CENTRE_SQUARE = 5

WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                 [1, 4, 7], [2, 5, 8], [3, 6, 9],
                 [1, 5, 9], [3, 5, 7]]

def prompt(message)
  puts "=> #{message}"
end

def display_introduction_message
  system "clear"
  prompt "Welcome to Tic-Tac-Toe!" \
         " First to #{WINNING_TOTAL} wins is the WINNER!"
end

def display_first_player
  if FIRST_PLAYER == 'choose'
    prompt "You decide who goes first at the start of every round!"
  elsif FIRST_PLAYER == 'player'
    prompt "You will always make the first move! Make it count!"
  else
    prompt "Computer will always make the first move! Good luck!!"
  end
end

def any_key_to_continue
  puts "Press any key to continue.."
  STDIN.getch
end

def acquire_first_player_next_round(round_number)
  user_input = ''
  loop do
    prompt "Who will go first for round #{round_number}?" \
           " ('p' or 'player' for player; 'c' or 'computer' for computer.)"
    user_input = gets.chomp.downcase
    break if valid_acquire_first_player?(user_input)
    prompt "Invalid entry! (Please enter: 'p', 'player', 'c', or 'computer'.)"
  end
  user_input = convert_letter_to_fullform(user_input) if user_input.size == 1
  user_input
end

def valid_acquire_first_player?(user_input)
  %w(p player c computer).include?(user_input)
end

def convert_letter_to_fullform(user_input)
  user_input == 'p' ? 'player' : 'computer'
end

def initialize_board
  (1..9).map { |num| [num, INITIAL_MARKER] }.to_h
end

# rubocop: disable Metrics/AbcSize, Metrics/MethodLength
def display_board_and_round(board, round_number)
  system "clear"
  puts "ROUND: #{round_number}".center(BOARD_LENGTH)
  puts "Player piece: #{PLAYER_MARKER}"
  puts "Computer piece: #{COMPUTER_MARKER}"
  puts "-" * BOARD_LENGTH

  puts "     |     |"
  puts "  #{board[1]}  |  #{board[2]}  |  #{board[3]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{board[4]}  |  #{board[5]}  |  #{board[6]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{board[7]}  |  #{board[8]}  |  #{board[9]}"
  puts "     |     |"
  puts ""
end
# rubocop: enable Metrics/AbcSize, Metrics/MethodLength

def current_player_move(current_player, board)
  if current_player == 'player'
    player_moves_piece!(board)
  else
    computer_moves_piece!(board)
  end
end

def player_moves_piece!(board)
  player_choice = nil
  loop do
    prompt "Pick a square! (Choices are: #{joinor(empty_squares(board))})"
    player_choice = gets.chomp
    break if valid_player_choice?(player_choice, board)
    prompt "Invalid choice! Please pick a number from selection."
  end
  board[player_choice.to_i] = PLAYER_MARKER
end

def empty_squares(board)
  board.select { |_, move_marker| move_marker == INITIAL_MARKER }.keys
end

def joinor(array, punctuation = ', ', joining_word = 'or')
  case array.size
  when 1 then array[0].to_s
  when 2 then "#{array[0]} #{joining_word} #{array[1]}"
  else
    array[-1] = "#{joining_word} #{array[-1]}"
    array.join(punctuation)
  end
end

def valid_player_choice?(player_choice, board)
  player_choice.size == 1 && empty_squares(board).include?(player_choice.to_i)
end

def computer_moves_piece!(board)
  computer_choice = if possible_move?(board, 'attack')
                      find_square(board, COMPUTER_MARKER)
                    elsif possible_move?(board, 'defense')
                      find_square(board, PLAYER_MARKER)
                    elsif centre_square_empty?(board)
                      CENTRE_SQUARE
                    else
                      random_empty_square(board)
                    end
  board[computer_choice] = COMPUTER_MARKER
end

def possible_move?(board, type)
  marker = type == 'attack' ? COMPUTER_MARKER : PLAYER_MARKER
  WINNING_LINES.each do |line|
    if board.values_at(*line).count(marker) == 2 &&
       board.values_at(*line).count(INITIAL_MARKER) == 1
      return true
    end
  end
  false
end

def find_square(board, marker)
  choice = nil
  WINNING_LINES.each do |line|
    if board.values_at(*line).count(marker) == 2 &&
       board.values_at(*line).count(INITIAL_MARKER) == 1
      choice = line.select { |square| board[square] == INITIAL_MARKER }.first
    end
  end
  choice
end

def centre_square_empty?(board)
  board[CENTRE_SQUARE] == INITIAL_MARKER
end

def random_empty_square(board)
  empty_squares(board).sample
end

def round_winner(board)
  if any_winner?(board, PLAYER_MARKER)
    'player'
  elsif any_winner?(board, COMPUTER_MARKER)
    'computer'
  elsif board_full?(board)
    'tie'
  end
end

def any_winner?(board, marker)
  WINNING_LINES.each do |line|
    return true if board.values_at(*line).count(marker) == 3
  end
  false
end

def board_full?(board)
  empty_squares(board).empty?
end

def alternate_current_player(current_player)
  current_player == 'player' ? 'computer' : 'player'
end

def display_round_winner(winner)
  case winner
  when 'player'
    prompt "You have won this round!"
  when 'computer'
    prompt "The computer has won this round!"
  when 'tie'
    prompt "This round was a tie!"
  end
end

def update_score(winner, score_hash)
  score_hash[winner] += 1
end

def display_score(score_hash)
  prompt "Your score is: #{score_hash['player']}"
  prompt "Computer's score is: #{score_hash['computer']}"
  prompt "Number of ties: #{score_hash['tie']}"
end

def grand_winner(score_hash)
  if score_hash['player'] == WINNING_TOTAL
    'player'
  elsif score_hash['computer'] == WINNING_TOTAL
    'computer'
  end
end

def display_grand_winner(winner)
  case winner
  when 'player'
    prompt "CONGRATULATIONS, you are the GRAND WINNER!!"
  when 'computer'
    prompt "The computer is the GRAND WINNER! " \
           "The machines have bested you, better luck next time!"
  end
end

def play_again?
  %w(y yes).include?(acquire_play_again_answer)
end

def acquire_play_again_answer
  answer = ''
  loop do
    prompt "Do you want to play again? " \
           "('y' or 'yes' to play again; 'no' or 'n' to exit.)"
    answer = gets.chomp.downcase
    break if valid_play_again_answer?(answer)
    prompt "Invalid answer! (please enter 'y', 'yes', 'n' or 'no'.)"
  end
  answer
end

def valid_play_again_answer?(answer)
  %w(y yes n no).include?(answer)
end

def display_goodbye_message
  prompt "Thanks for playing Tic-Tac-Toe!"
end

loop do # main game loop
  display_introduction_message
  display_first_player

  score_hash = Hash.new(0)
  round_number = 1

  loop do # round loop
    any_key_to_continue
    current_player = if FIRST_PLAYER == 'choose'
                       acquire_first_player_next_round(round_number)
                     else
                       FIRST_PLAYER
                     end

    board = initialize_board
    display_board_and_round(board, round_number)

    loop do # turn loop
      current_player_move(current_player, board)
      display_board_and_round(board, round_number)
      break if round_winner(board)
      current_player = alternate_current_player(current_player)
    end

    winner = round_winner(board)
    display_round_winner(winner)
    update_score(winner, score_hash)
    display_score(score_hash)

    break if grand_winner(score_hash)

    round_number += 1
  end

  display_grand_winner(grand_winner(score_hash))

  break unless play_again?
end

display_goodbye_message
