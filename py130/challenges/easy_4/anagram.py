class Anagram:
    def __init__(self, word):
        self.word = word

    def match(self, lst):
        return list(filter(self._is_anagram, lst))

    def _is_anagram(self, word):
        if self.word.lower() == word.lower():
            return False
        return sorted(list(self.word.lower())) == sorted(list(word.lower()))