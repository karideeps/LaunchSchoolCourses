import unittest

class TestExercises(unittest.TestCase):
    def test_is_not_even(self):
        value = 11
        self.assertTrue(value % 2 != 0, 'value is not odd')

    def test_lower(self):
        value = 'XYZ'
        self.assertEqual('xyz', value.lower())

    def test_not_none(self):
        value = None
        self.assertIsNone(value)

    def test_in(self):
        lst = ['xyz', 1, 'abc']
        self.assertIn('xyz', lst)

    def test_not_in(self):
        lst = [1, 'abc']
        self.assertNotIn('xyz', lst)

    def test_raises_error(self):
        class NoExperienceError(Exception):
            pass

        class Employee:
            def hire(self):
                raise NoExperienceError

        an_employee = Employee()
        with self.assertRaises(NoExperienceError):
            an_employee.hire()

    def test_numeric(self):
        value = 123
        self.assertIsInstance(value, int)

    def test_list_process(self):
        def list_process():
            return [1, 2, 3]
        a_lst = list_process()
        b_lst = a_lst
        self.assertIs(a_lst, b_lst)

if __name__ == '__main__':
    unittest.main()