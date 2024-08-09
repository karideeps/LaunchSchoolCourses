class Triangle:
    def __init__(self, side1, side2, side3):
        self._side1 = side1
        self._side2 = side2
        self._side3 = side3
        self._validate_sides()

    def _validate_sides(self):
        if not self._all_sides_greater_than_zero():
            raise ValueError('All sides must be greater than zero.')
        if not self._two_sides_greater_than_third():
            raise ValueError('The sum of the smallest two sides must be greater than the third.')

    def _all_sides_greater_than_zero(self):
        sides = self._to_list()
        return all(sides)

    def _two_sides_greater_than_third(self):
        sides = sorted(self._to_list())
        return sides[0] + sides[1] > sides[2]

    def _to_list(self):
        return [self._side1, self._side2, self._side3]

    @property
    def kind(self):
        if self._is_equilateral():
            return 'equilateral'
        if self._is_isosceles():
            return 'isosceles'
        return 'scalene'

    def _is_equilateral(self):
        sides = self._to_list()
        return len(set(sides)) == 1

    def _is_isosceles(self):
        sides = self._to_list()
        return len(set(sides)) == 2

    def _is_scalene(self):
        sides = self._to_list()
        return len(set(sides)) == 3
