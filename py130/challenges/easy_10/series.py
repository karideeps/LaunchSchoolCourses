class Series:
    def __init__(self, num):
        self.num = num

    def slices(self, length):
        if length > len(self.num):
            raise ValueError

        slices = []
        for i in range(len(self.num)-length+1):
            slices.append([int(num) for num in self.num[i:i+length]])

        return slices
