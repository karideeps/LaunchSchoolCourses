# Feedback

## Medium 1 - Fibonacci Numbers(Procedural)

The discussion for this point could be revised since a tuple is never used. It can be rewritten as follows:

The solution uses two variables `previous` and `current` to maintain the values of the present two numbers in the Fibonacci series.

The solution starts by setting `previous` and `current` to the first two numbers in the series which are `1` and `1`. Using these numbers as a foundation, the solution loops and reassigns these variables `nth - 2` times. If `nth` is `1` or `2`, no iteration is needed; you just have to return `1`. Otherwise, we perform the iteration, then return the final value assigned to `current`.

For example, given an argument of `6`, the values of `previous` and `current` are shown after each iteration, starting with their initial value, are shown bellow.

```python
# previous, current
# 1, 1
# 1, 2     values after 1st iteration (nth = 3)
# 2, 3     values after 2nd iteration (nth = 4)
# 3, 5     values after 3rd iteration (nth = 5)
# 5, 8     values after 4th iteration (nth = 6)
```

## PY110 - Lesson 2 - Assignment 4

This statement is not completely accurate: The disadvantage is that the `copy` method is only available on lists, not other collection types.

It is also available on `dict`s and `set`s. See below:

```python
dict1 = {'a': 'ant', 'b': 'bat'}
dict2 = dict1.copy()

print(dict1 == dict2) # True
print(dict1 is dict2) # False

set1 = {'a', 'b', 'c'}
set2 = set1.copy()

print(set1 == set2) # True
print(set1 is set2) # False
```
