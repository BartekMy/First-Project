var Game = require('./game');

var newGame = new Game();
newGame.showMan();
newGame.showHouse();
newGame.showTree();
newGame.showZombie();
newGame.startGame();

document.addEventListener('keydown', function(event){
newGame.moveMan(event);

  });
