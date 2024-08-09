class DNA:
    def __init__(self, sequence):
        self.sequence = sequence

    def hamming_distance(self, sequence):
        short, long = sorted([self.sequence, sequence], key=len)

        hamming_distance = 0
        for i in range(len(short)):
            if short[i] != long[i]:
                hamming_distance += 1

        return hamming_distance