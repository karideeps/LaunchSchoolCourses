CARD_VALUES = { '2' => 2, '3' => 3, '4' => 4, '5' => 5, '6' => 6,
                '7' => 7, '8' => 8, '9' => 9, '10' => 10, 'J' => 10,
                'Q' => 10, 'K' => 10, 'A' => 11 }

SUITS = ['♣', '♥', '♠', '♦']

MAX_HAND_VALUE = 51 # can be 21, 31, 41, or 51

def initialize_shuffled_deck
  CARD_VALUES.keys.product(SUITS).shuffle
end


def hand_value(hand)
  value = hand.map { |card| CARD_VALUES[card[0]] }.sum
  number_of_aces = hand.map{ |card| card[0]}.count('A')

  number_of_aces.times do
    value -= 10 if value > MAX_HAND_VALUE
  end
  value
end


# EXAMPLES/TEST CASES: all should print `true` to the screen
if MAX_HAND_VALUE == 21
  puts hand_value([['2', '♣'], ['A', '♠']]) == 13
  puts hand_value([['10', '♣'], ['A', '♠']]) == 21
  puts hand_value([['10', '♣'], ['A', '♠'], ['A', '♦']]) == 12

elsif MAX_HAND_VALUE == 31
  puts hand_value([['2', '♣'], ['A', '♠']]) == 13
  puts hand_value([['10', '♣'], ['A', '♠']]) == 21
  puts hand_value([['10', '♣'], ['A', '♠'], ['A', '♦']]) == 22
  puts hand_value([['10', ], ['J', ], ['A', ]]) == 31
  puts hand_value([['10', ], ['J', ], ['A', ], ['A', ]]) == 22

elsif MAX_HAND_VALUE == 41
  puts hand_value([['2', '♣'], ['A', '♠']]) == 13
  puts hand_value([['10', '♣'], ['A', '♠']]) == 21
  puts hand_value([['10', '♣'], ['A', '♠'], ['A', '♦']]) == 32
  puts hand_value([['10', ], ['J', ], ['A', ]]) == 31
  puts hand_value([['10', ], ['J', ], ['A', ], ['A', ]]) == 32
  puts hand_value([['10', ], ['J', ], ['9', ], ['A', ], ['A', ]]) == 41

elsif   MAX_HAND_VALUE == 51
  puts hand_value([['10', ], ['J', ], ['9', ], ['A', ], ['A', ]]) == 51
end