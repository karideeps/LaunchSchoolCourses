with open("cp1.txt") as file:
    content = file.read()
    content = content.split('\n\n')
    content = [f'<p id="{para_num}">{content}</p>'
               for para_num, content in enumerate(content, 1)]
    
    return ''.join(content)
