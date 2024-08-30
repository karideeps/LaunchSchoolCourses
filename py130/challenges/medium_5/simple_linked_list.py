class Element:
    def __init__(self, datum, next=None):
        self.datum = datum
        self.next = next

    def is_tail(self):
        return self.next == None

class SimpleLinkedList:
    def __init__(self):
        self.head = None

    @property
    def size(self):
        count = 0

        next_element = self.head

        while next_element:
            count += 1
            next_element = next_element.next

        return count

    def is_empty(self):
        return self.size == 0

    def push(self, datum):
        element = Element(datum, self.head)
        self.head = element

    def peek(self):
        if self.head:
            return self.head.datum
        else:
            return None

    def pop(self):
        popped = self.head
        self.head = self.head.next
        return popped.datum

    @classmethod
    def from_list(cls, lst):

        new_lst = cls()

        if lst:
            for item in reversed(lst):
                new_lst.push(item)

        return new_lst

    def to_list(self):
        lst = []

        next_element = self.head

        while next_element:
            lst.append(next_element.datum)
            next_element = next_element.next

        return lst

    def reverse(self):
        lst = self.to_list()
        lst = list(reversed(lst))
        return self.__class__.from_list(lst)