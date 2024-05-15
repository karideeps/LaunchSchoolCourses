import random
VALID_CHOICES = ['rock', 'paper', 'scissors']

def display_winner(player, computer):
    prompt(f"you chose {player}, computer chose {computer}")

    if ((player == "rock" and computer == "scissors") or
        (player == "paper" and computer == "rock") or
        (player == "scissors" and computer == "paper")):
        prompt("You win!")
    elif ((player == "rock" and computer == "paper") or
          (player == "paper" and computer == "scissors") or
          (player == "scissors" and computer == "rock")):
        prompt("Computer wins!")
    else:
        prompt("It's a tie!")

def prompt(message):
    print(f"==> {message}")

play_again = 'y'

while play_again[0] == 'y':
    prompt(f'Choose one: {', '.join(VALID_CHOICES)}')
    while True:
        choice = input()
        if choice in VALID_CHOICES:
            break
        prompt("That's not a valid choice")

    computer_choice = random.choice(VALID_CHOICES)

    display_winner(choice, computer_choice)

    prompt('Do you want to play again (y/n)?')

    while True:
        play_again = input().lower()
        if play_again.startswith('n') or play_again.startswith('y'):
            break
        prompt('Please enter "y" or "n".')
