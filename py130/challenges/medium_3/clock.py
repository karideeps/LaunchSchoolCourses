class Clock:

    def __init__(self, hour, minute):
        self.hour = hour
        self.minute = minute

    @classmethod
    def at(cls, hour, minute=0):
        return (cls(hour, minute))

    @classmethod
    def _convert_to_str(cls, hour_or_minute):
        hour_or_minute = str(hour_or_minute)
        return hour_or_minute.rjust(2, '0')

    def __str__(self):
        hour = Clock._convert_to_str(self.hour)
        minute = Clock._convert_to_str(self.minute)
        return f'{hour}:{minute}'

    def __add__(self, other):
        if not isinstance(other, int):
            return NotImplemented

        minutes = self._convert_to_minutes()
        new_minutes = minutes + other

        hours, minutes = divmod(new_minutes, 60)
        _, hours = divmod(hours, 24)
        return Clock(hours, minutes)

    def __sub__(self, other):
        if not isinstance(other, int):
            return NotImplemented

        minutes = self._convert_to_minutes()
        new_minutes = minutes - other

        hours, minutes = divmod(new_minutes, 60)
        _, hours = divmod(hours, 24)
        return Clock(hours, minutes)

    def __eq__(self, other):
        if not isinstance(other, Clock):
            return NotImplemented

        return self.hour == other.hour and self.minute == other.minute

    def _convert_to_minutes(self):
        return self.hour * 60 + self.minute
