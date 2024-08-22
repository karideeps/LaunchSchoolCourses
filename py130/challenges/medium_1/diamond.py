class Diamond:

    LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    @classmethod
    def make_diamond(cls, letter):
        letter_idx = Diamond.LETTERS.find(letter)
        result = ''

        current_letter_idx = 0
        for surrounding_space in range(letter_idx, -1, -1):
            result += ' ' * surrounding_space
            result += Diamond.LETTERS[current_letter_idx]
            if current_letter_idx != 0:
                in_between_spaces = current_letter_idx * 2 - 1
                result += ' ' * in_between_spaces
                result += Diamond.LETTERS[current_letter_idx]

            current_letter_idx += 1
            result += ' ' * surrounding_space
            result += '\n'

        current_letter_idx = letter_idx - 1
        for surrounding_space in range(1, letter_idx + 1):
            result += ' ' * surrounding_space
            result += Diamond.LETTERS[current_letter_idx]
            if current_letter_idx != 0:
                in_between_spaces = current_letter_idx * 2 - 1
                result += ' ' * in_between_spaces
                result += Diamond.LETTERS[current_letter_idx]

            current_letter_idx -= 1
            result += ' ' * surrounding_space
            result += '\n'

        return result
