/*
declare class `CustomSet()`
  constructor()
    input: array

  isEmpty()
    returns `true` or `false`

  contains(number)
    returns `true` or `false`

  isSubset(CustomSetObject)
    return true if all elements of the calling set are in the argument set
    if calling set is empty return true;

  isDisjoint(CustomSetObject)
    if calling set is empty return `true`
    if argument set is empty return `true`
    if any element occurs in both sets, return `false`
    if sets share no elements return `true`

  isSame(customSetObject)
    if both sets are empty return `true`
    sets with the same elements return true. Order doesn't matter
    sets with different elements return `false`

  add(number)
    if the set does not include to argument, add argument to the set

  intersection(customSetObject)
    intersection of a non-empty set and an epty set is an empty set
    intersection of two sets with no shared elements is an empty set
    intersection of two sets with shared elements is a set of the shared elements

  difference(customSetObject)
    return emptySet if both sets are empty
    if either set is empty return an empty set
    difference of two non-empty sets is a set of elements that are only in the first set

  union(customSetObject)
    union of empty sets is an empty set
    union of an empty set and non-empty set is the non-empty set
    union of non-empty sets contains all unique elements


*/