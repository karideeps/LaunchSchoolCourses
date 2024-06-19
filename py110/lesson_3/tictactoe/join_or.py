# input: list, string(optional), string(optional)
# output: string

# define `join_or` with the param `lst`, `sep=';'`, and `final_sep` = 'or'
    # if not lst: return ''
    # if len(lst) == 1: return lst[0]

    # if len(lst) == 2:
        # return final_sep.join(lst)

    # first_half = sep.join(lst[:-1])
    # return f'{first_half}{sep} {final_sep} {lst[-1]}'

def join_or(lst, sep=', ', final_sep='or'):
    if not lst: 
        return ''
    
    lst = [str(item) for item in lst]

    if len(lst) == 1:
        return lst[0]

    if len(lst) == 2: 
        return f'{lst[0]} {final_sep} {lst[-1]}'

    first_half = sep.join(lst[:-1])
    return f'{first_half}{sep}{final_sep} {lst[-1]}'


print(join_or([1, 2, 3]))               # => "1, 2, or 3"
print(join_or([1, 2, 3], '; '))         # => "1; 2; or 3"
print(join_or([1, 2, 3], ', ', 'and'))  # => "1, 2, and 3"
print(join_or([]))                      # => ""
print(join_or([5]))                     # => "5"
print(join_or([1, 2]))                  # => "1 or 2"