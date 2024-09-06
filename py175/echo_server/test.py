import random

request_line = 'GET /?rolls=2&sides=6 HTTP/1.1'
http_method, path_and_params, _ = request_line.split(' ')

path, params = path_and_params.split('?')
params = params.split("&")
params_dict = {}

for param in params:
    key, value = param.split('=')
    params_dict[key] = value

print(request_line)
print(http_method)
print(path)
print(params_dict)


for _ in range(int(params_dict['rolls'])):
    print(random.randint(1, int(params_dict['sides'])))


# print(request_line.split(' '))