import yaml
from pprint import pp

with open('users.yaml', 'r') as file:
    data = yaml.safe_load(file)
    pp(data)