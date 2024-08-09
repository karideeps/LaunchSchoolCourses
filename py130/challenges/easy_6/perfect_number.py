class PerfectNumber:

    @classmethod
    def classify(cls, num):
        if num <= 0:
            raise ValueError('Input must be a positive integer')

        sum_of_divisors = sum(cls.get_factors(num))
        if sum_of_divisors > num:
            return 'abundant'
        elif sum_of_divisors < num:
            return 'deficient'
        else:
            return 'perfect'


    @classmethod
    def get_factors(cls, num):
        return [divisor for divisor in range(1, num)
                if num % divisor == 0]