# input: list of strings
# output: int

# define `total` with the param `hand`:
    # initialize `values` to transformed hand
        # second element from each hand
    # initialize `values_without_ace` to
        # select elements from `values` that are NOT 'A'
        # transform elements to int(element) or 10
        # sum elements
    # initialize `aces` to `values.count('A')`
    # for each ace:
        # if sum + ace > 21:
            # sum += 1
        # else
            # sum += 11l

CARD_VALUES = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
    'A': 11
}

def total(hand):
    values = [ rank for suit, rank in hand ]
    
    hand_value = sum([ CARD_VALUES[value] for value in values])

    aces = values.count('A')

    for ace in range(aces):
        if hand_value > 21:
            hand_value -= 10

    return hand_value

    


print(total([['S', 'J'], ['D', 'A'],  ['D', 'A']]))