function playersTurn(playersHand, deck) {
  while (true) {
    displayScoreBoard(scoreBoard);
    displayPlayersHand(playerHand);
    displayComputersHand(computersHand, 'hidden');

    displayTotal(playersHand);

    if (isBusted(playersHand)) {
      displayBustedMessage(player);
      break;
    }

    playerChoice = getPlayerChoice();
    if (playerChoice === 'stay') break;

    dealCards(playersHand,CARDS_DEALT_PER_HIT, deck);

  }

}