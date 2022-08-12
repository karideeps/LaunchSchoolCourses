CARD_VALUES = { '2' => 2, '3' => 3, '4' => 4, '5' => 5, '6' => 6, '7' => 7,
                '8' => 8, '9' => 9, '10' => 10, 'J' => 10, 'Q' => 10,
                'K' => 10, 'A' => 1}

MAX_HAND_VALUE = 21

def total_hand_value(hand)
  value = hand.map { |card| CARD_VALUES[card] }.sum
  value += 10 if hand.include?('A') && value + 10 <= MAX_HAND_VALUE
  value
end


# EXAMPLES/TEST CASES all should print `true` to the screen
hand = ['2', 'A']
puts total_hand_value(hand) == 13
puts hand == ['2', 'A']
puts total_hand_value(['2', 'A', 'A']) == 14
puts total_hand_value(['2', 'A', 'A', 'A']) == 15
puts total_hand_value(['2', 'A', 'A', 'A', 'A']) == 16
puts total_hand_value(['5', 'A']) == 16
puts total_hand_value(['5', 'A', 'A']) == 17
puts total_hand_value(['10', 'A']) == 21
puts total_hand_value(['10', 'A', 'A']) == 12
puts total_hand_value(['10', 'A', 'A', 'A']) == 13
puts total_hand_value(['10', 'A', 'A', 'A', 'A']) == 14
puts total_hand_value(['J', 'Q']) == 20
puts total_hand_value(['J', 'Q', 'A']) == 21
puts total_hand_value(['K', 'A']) == 21
puts total_hand_value(['A']) == 11
puts total_hand_value(['7', 'A']) == 18
puts total_hand_value(['7', 'A', 'A']) == 19
puts total_hand_value(['7', 'A', '8']) == 16
puts total_hand_value(['K', 'A']) == 21
puts total_hand_value(['K', 'A', 'A']) == 12
puts total_hand_value(['2', 'A']) == 13
puts total_hand_value(['2', 'A', 'K']) == 13
puts total_hand_value(['2', '3', 'K',]) == 15
puts total_hand_value(['2', '3', 'K', 'Q']) == 25
puts total_hand_value(['A', 'A']) == 12
puts total_hand_value(['5', '2', 'A', 'A']) == 19
puts total_hand_value(['5', '2', 'A']) == 18
puts total_hand_value(['7','9','A']) == 17