
// Player class
function Player(name) {
  this.name = name;
  this.choice = null;
}

Player.prototype.picks = function(choice) {
  // sets choice property for Player
  // valid values: 'rock', 'paper', or 'scissors'

  var valid = ['rock', 'paper', 'scissors'];

  if (valid.indexOf(choice) !== -1) {
    this.choice = choice;
    return this.choice;
  }
};

// Game class
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
  // determine winner of rock, paper, scissors
  // return the player who won, null if a tie

  player1 = this.player1;
  player2 = this.player2;

  if (player1.choice === 'rock') {
    switch(player2.choice) {
      case 'scissors':
        return player1;
      case 'paper':
        return player2;
      case 'rock':
        return null;
    }
  }

  else if (player1.choice === 'scissors') {
    switch(player2.choice) {
      case 'rock':
        return player2;
      case 'paper':
        return player1;
      case 'scissors':
        return null;
    }
  }

  else if (player1.choice === 'paper') {
    switch(player2.choice) {
      case 'rock':
        return player1;
      case 'scissors':
        return player2;
      case 'paper':
        return null;
    }
  }
};

module.exports = {
  Player: Player,
  Game: Game
};
