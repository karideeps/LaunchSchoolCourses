import socket
import random

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 3003))
server_socket.listen()

print("Server is running on localhost:3003")

while True:
    client_socket, addr = server_socket.accept()
    print(f"Connection from {addr}")

    request_line = client_socket.recv(1024).decode()
    if (not request_line) or ('favicon.ico' in request_line):
        client_socket.close()
        continue


    request_line = request_line.splitlines()[0]
    http_method, path_and_params, _ = request_line.split(' ')
    path, params = path_and_params.split('?')
    params = params.split("&")
    params_dict = {}

    for param in params:
        key, value = param.split('=')
        params_dict[key] = value

    response = ("HTTP/1.1 200 OK\r\n"
                "Content-Type: text/html\r\n"
                "\r\n")

    response += ('<!DOCTYPE html>'
                    '<html lang="en">'
                        '<head>'
                        '<title>echo_server</title>'
                        '<meta charset="utf-8">'
                    '</head>'
                    '<body>'
                        f'<p>Request Line: {request_line}</p>'
                        f'<p>HTTP Method: {http_method}</p>'
                        f'<p>Path: {path}</p>'
                        f'<p>Parameters: {params_dict}</p>')


    for _ in range(int(params_dict['rolls'])):
        roll = random.randint(1, int(params_dict['sides']))
        response += f'<p>Rolls: {roll}</p>'

    response += "</body></html>"

    client_socket.sendall(response.encode())
    client_socket.close()