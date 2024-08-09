
class RomanNumeral:
    ROMAN_NUMERALS = {
        0: '',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M',
        2000: 'MM',
        3000: 'MMM',
    }

    def __init__(self, num):
        self.num = num

    def to_roman(self):
        nums_split = list(reversed(str(self.num)))
        reversed_converted_num = [int(num) * 10**idx
                                  for idx, num
                                  in enumerate(nums_split)]
        converted_nums = list(reversed(reversed_converted_num))

        roman_str = ''
        for num in converted_nums:
            roman_str += RomanNumeral.ROMAN_NUMERALS[num]

        return roman_str

a_num = RomanNumeral(1024)
print(a_num.to_roman())