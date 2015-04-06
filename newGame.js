var elSubmit = document.getElementById('submit'),
      elPlayerGuess = document.getElementById('cardValue').value,
      elMessages = document.getElementById('messages');

elSubmit.addEventListener('submit', checkGuesses(), false);
elSubmit.addEventListener('submit', computerGuess(), false);

var Game = function() {
      this.max = 9;
      this.makeGuess = function() {
        this.guess = elPlayerGuess
        this.max--;
        return this.guess;
  };
}
var game = new Game();
function computerGuess() {
  var pick = ['two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','ace'];
  window.rand = pick[Math.floor(Math.random() * pick.length)];
}
for (var i = 9; i >= 0; i--) {
  elClock = 9;
  elClock--;
}
function checkGuesses() {
  if (parseInt(game.max) === 0) {
    elMessages.innerHTML = 'Yo, you suck...';
  }
  else if (game.guess === rand) {
    elMessages.innerHTML = 'Ayyyyyye Lmao';
  }
  else {
    elMessages.innerHTML = ('Not quite, try again.' + ' ' + game.max + ' tries left!');
  }
}

