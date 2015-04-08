(function(){
  var elSubmit = document.getElementById('submit'),
      elPlayerGuess = document.getElementById('cardValue').value,
      elMessages = document.getElementById('messages'),
      rand, pick;

  var Game = function() {
    this.max = 9;
    this.guess = elPlayerGuess;
  };

  Game.prototype.makeGuess = function(){
    this.max--;
    return this.guess;
  };

  var game = new Game();

  elSubmit.addEventListener('click', function guessClick(e) {
    e.preventDefault();
    pick = ['two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','ace'];
    rand = pick[Math.floor(Math.random() * pick.length)];
    if (game.max === 0) {
      elMessages.innerHTML = 'Yo, you suck...';
    } else if (game.guess === rand) {
      elMessages.innerHTML = 'Ayyyyyye Lmao';
    } else {
      game.makeGuess();
      elMessages.innerHTML = ('Not quite, try again.' + ' ' + game.max + ' tries left!');
    };
  });
})();
