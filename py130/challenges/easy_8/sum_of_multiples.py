class SumOfMultiples:

    multiples = (3, 5)

    def __init__(self, *args):
        self.multiples = args

    def to(self, limit):
        return self.__class__.sum_of_multiples(self.multiples, limit)

    @classmethod
    def sum_up_to(cls, limit):
        return cls.sum_of_multiples(cls.multiples, limit)

    @classmethod
    def sum_of_multiples(cls, multiples, limit):
        sum = 0
        for num in range(limit):
            for multiple in multiples:
                if num % multiple == 0:
                    sum += num
                    break
        return sum