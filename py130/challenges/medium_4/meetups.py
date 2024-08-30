import datetime


class Meetup:
    def __init__(self, year, month):
        self.year = year
        self.month = month

    def day(self, weekday, descriptor):
        weekday = weekday.lower()
        descriptor = descriptor.lower()

        occurrences = self._find_occurrences(weekday)

        if descriptor == 'first':
            return occurrences[0]
        if descriptor == 'second':
            return occurrences[1]
        if descriptor == 'third':
            return occurrences[2]
        if descriptor == 'fourth':
            return occurrences[3]
        if descriptor == 'fifth':
            try:
                return occurrences[4]
            except IndexError:
                return None
        if descriptor == 'last':
            return occurrences[-1]
        if descriptor == 'teenth':
            for date in occurrences:
                if date.day >= 13:
                    return date

    def _find_occurrences(self, weekday):
        weekday = Meetup.convert_to_int(weekday)

        delta = datetime.timedelta(days=1)
        current_date = datetime.date(self.year, self.month, 1)

        occurrences = []

        while True:
            if current_date.weekday() == weekday:
                occurrences.append(current_date)

            current_date += delta
            if current_date.month != self.month:
                break
        
        return occurrences

    @classmethod
    def convert_to_int(cls, weekday):
        days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday',
                'saturday', 'sunday']

        return days.index(weekday)
