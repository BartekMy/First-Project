var Zombie = function(x, y, direction) {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
  this.direction = Math.floor(Math.random() * 4);
}

module.exports = Zombie;
