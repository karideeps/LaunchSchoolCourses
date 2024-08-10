class Octal:
    def __init__(self, octal):
        self.octal = octal

    def to_decimal(self):
        if not self._valid_octal():
            return 0

        ints = [int(num) * 8**idx 
                for idx, num in enumerate(self.octal[::-1])]

        return sum(ints)

    def _valid_octal(self):
        for char in self.octal:
            if char not in '01234567':
                return False
        return True
