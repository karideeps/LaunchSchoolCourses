def invalid_number(number_str):
    try:
        int(number_str)
    except ValueError:
        return True
    
    return False

print(invalid_number('asd'))