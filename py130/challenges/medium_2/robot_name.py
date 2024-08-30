import random

class Robot:

    used_names = []

    def __init__(self):
        self._generate_name()

    def _generate_name(self):
        
        while True:
            name = ''
            letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            digits = '0123456789'

            name += random.choice(letters)
            name += random.choice(letters)
            name += random.choice(digits)
            name += random.choice(digits)
            name += random.choice(digits)

            if name not in Robot.used_names:
                Robot.used_names.append(name)
                self._name = name
                break

    @property
    def name(self):
        return self._name

    def reset(self):
        self._generate_name()
