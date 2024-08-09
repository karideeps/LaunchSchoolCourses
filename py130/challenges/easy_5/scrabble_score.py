class Scrabble:
    SCORE = {
        1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'X'],
        10: ['Q', 'Z']
    }

    def __init__(self, word):
        self.word = word

    def score(self):
        if not self.word:
            return 0
        return sum(self.word_to_score_list())

    def word_to_score_list(self):
        return [Scrabble.letter_to_score(letter)
                for letter in self.word]

    @classmethod
    def letter_to_score(cls, letter):
        letter = letter.upper()
        for key, value in cls.SCORE.items():
            if letter in value:
                return key
        return 0

    @classmethod
    def calculate_score(cls, word):
        word = Scrabble(word)
        return word.score()