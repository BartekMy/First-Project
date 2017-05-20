var Game = require('./game');

document.getElementById("start").addEventListener("click", startFunction);

function startFunction() {
var newGame = new Game();
newGame.showMan();
newGame.showHouse();
newGame.showTree();
newGame.showZombie();
newGame.startGame();
document.addEventListener('keydown', function(event){
newGame.moveMan(event);
});
this.disabled = true;
}
