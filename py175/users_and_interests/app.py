from flask import Flask, redirect, url_for, render_template, g
import yaml

app = Flask(__name__)

@app.before_request
def load_user_data():
    with open('users.yaml', 'r') as file:
        g.users_data = yaml.safe_load(file)

@app.route("/")
def home():
    return redirect(url_for('users'))
    print('hi')

@app.route("/users")
def users():
    users = list(g.users_data.keys())
    return render_template('users.html', users=users)

@app.route("/user/<name>")
def user_page(name):
    user_data = g.users_data[name]
    email = user_data['email']
    interests = ', '.join(user_data['interests'])
    users = list(g.users_data.keys())
    other_users = [user for user in users if user != name]
    return render_template('user.html', email=email, interests=interests, other_users=other_users)

@app.template_filter('count_users')
def count_users(users_data):
    return len(users_data.keys())

@app.template_filter('count_interests')
def count_interests(users_data):
    interests = []
    for user_details in users_data.values():
        interests += user_details['interests']
    return len(interests)