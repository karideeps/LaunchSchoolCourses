# OOP Book --> Magic Methods --> Exercises 3

class Candidate():
    def __init__(self, name):
        self.name = name
        self.votes = 0

    def __add__(self, other):
        if not isinstance(other, int):
            return NotImplemented

        self.votes += other

    def __iadd__(self, other):
        if not isinstance(other, int):
            return NotImplemented

        self.votes += other

    def get_name(self):
        return self.name

    def get_votes(self):
        return self.votes

    def get_votes_string(self):
        return f'{self.get_name()}: {self.get_votes()} votes'

class Election():
    def __init__(self, candidates):
        self.candidates = candidates

    def results(self):
        result = ''
        votes = self.get_votes()
        for vote in votes:
            result += vote
        result += '\n'

        total = self.calculate_total()
        
        winner, winner_votes = self.get_winner_and_votes()
        winner_percent = f'{winner_votes / total:.1%}'

        winner_sentence = f'{winner} won: {winner_percent} of votes'
        result += winner_sentence
        return result

    def get_votes(self):
        return ([candidate.get_votes_string()+'\n' for candidate in self.candidates])

    def calculate_total(self):
        return sum([candidate.get_votes() for candidate in self.candidates])

    def get_winner_and_votes(self):
        candidates_and_votes = ([(candidate.get_name(), candidate.get_votes())
               for candidate in self.candidates])

        def sort_func(tup):
            return tup[1]
    
        candidates_and_votes.sort(key=sort_func, reverse=True)
        return candidates_and_votes[0]


mike_jones = Candidate('Mike Jones')
susan_dore = Candidate('Susan Dore')
kim_waters = Candidate('Kim Waters')

candidates = {
    mike_jones,
    susan_dore,
    kim_waters,
}

votes = [
    mike_jones,
    susan_dore,
    mike_jones,
    susan_dore,
    susan_dore,
    kim_waters,
    susan_dore,
    mike_jones,
]

for candidate in votes:
    candidate += 1

election = Election(candidates)
print(election.results())