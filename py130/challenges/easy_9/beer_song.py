class BeerSong:
    @classmethod
    def verses(cls, start=99, end=None):
        verses = ''
        if end == None:
            verses = cls.verse(start)
        else:
            for i in range(start, end - 1, -1):
                verses += cls.verse(i)
                if i != end:
                    verses += '\n'

        return verses

    @classmethod
    def lyrics(cls):
        return cls.verses(99, 0)

    @classmethod
    def verse(cls, verse_num):
        verse = ''
        bottles = cls._get_bottles(verse_num)
        verse += (f'{bottles.capitalize()} of beer on the wall, '
                  f'{bottles} of beer.\n')

        remaining = verse_num - 1
        if remaining >= 0:
            remaining_bottles = cls._get_bottles(remaining)
            one_or_it = 'it' if verse_num == 1 else 'one'
            verse += (f'Take {one_or_it} down and pass it around, '
                      f'{remaining_bottles} of beer on the wall.\n')
        else:
            verse += (f'Go to the store and buy some more, '
                      f'99 bottles of beer on the wall.\n')
        return verse

    @classmethod
    def _get_bottles(cls, bottle):
        if bottle == 0:
            return 'no more bottles'
        elif bottle == 1:
            return '1 bottle'
        else:
            return f'{bottle} bottles'

print(BeerSong.verses(2, 0))