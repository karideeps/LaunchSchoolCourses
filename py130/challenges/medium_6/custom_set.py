class CustomSet:
    def __init__(self, lst=None):
        self.lst = []

        lst = lst or []
        for item in lst:
            self.add(item)

    def add(self, item):
        if item not in self.lst:
            self.lst.append(item)

    def is_empty(self):
        return len(self.lst) == 0

    def contains(self, item):
        return item in self.lst

    def is_subset(self, other_set):
        for item in self.lst:
            if not other_set.contains(item):
                return False
        return True

    def is_disjoint(self, other_set):
        for item in self.lst:
            if other_set.contains(item):
                return False
        return True

    def __len__(self):
        return len(self.lst)

    def is_same(self, other_set):
        if len(self) != len(other_set):
            return False

        for item in self.lst:
            if not other_set.contains(item):
                return False

        return True

    def __eq__(self, other_set):
        if not isinstance(other_set, CustomSet):
            return NotImplemented

        return self.is_same(other_set)

    def intersection(self, other_set):
        new_set = CustomSet()
        for item in self.lst:
            if other_set.contains(item):
                new_set.add(item)
        return new_set

    def difference(self, other_set):
        new_set = CustomSet()
        for item in self.lst:
            if not other_set.contains(item):
                new_set.add(item)

        return new_set

    def union(self, other_set):
        new_set = CustomSet()

        for item in self.lst:
            new_set.add(item)

        for item in other_set.lst:
            new_set.add(item)

        return new_set
