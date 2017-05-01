var Man = function(x, y) {
  this.x = Math.floor(Math.random() * 20);
  this.y = Math.floor(Math.random() * 20);
}
var House = function(x, y) {
  this.x = 4;
  this.y = 4;
}
var Tree = function(x, y) {
  this.x = 14;
  this.y = 6;
}
var Game = function(board, man) {
  var self = this;
  this.board = document.querySelectorAll('#board div');
  this.man = new Man();
  this.house = new House();
  this.tree = new Tree();

  this.index = function(x,y) {
    return x + (y * 20);
  }
  this.showTree = function() {
    this.board[ this.index(this.tree.x,this.tree.y) ].classList.add('tree');
  }
  this.showHouse = function() {
    this.board[ this.index(this.house.x,this.house.y) ].classList.add('house');
  }
  this.showMan = function() {
    this.board[ this.index(this.man.x,this.man.y) ].classList.add('man');
  }
  this.showWalkingMan = function() {
    this.board[ this.index(this.man.x,this.man.y) ].classList.add('man_walking');
  }
  this.showStandingMan = function() {
    this.board[ this.index(this.man.x,this.man.y) ].classList.add('man_standing');
  }
  this.showSittingMan = function() {
    this.board[ this.index(this.man.x,this.man.y) ].classList.add('man_sitting');
  }
  this.timeout = function() {
if(event.type == 'keydown') {
    setTimeout(function() {
      self.hideVisibleWalkingMan();
      self.showStandingMan();
  }, 5000);
  setTimeout(function() {
    self.hideVisibleStandingMan();
    self.showSittingMan();
}, 7000);
    }
}
  this.hideVisibleMan = function() {
    document.querySelector('.man').classList.remove('man');
  }
  this.hideAllVisibleWalkingMan = function() {
    document.querySelector('.man_walking').classList.remove('man_walking');
  }
  this.hideVisibleWalkingMan = function() {
    this.board[ this.index(this.man.x,this.man.y) ].classList.remove('man_walking');
  }
  this.hideVisibleStandingMan = function() {
    this.board[ this.index(this.man.x,this.man.y) ].classList.remove('man_standing');
  }
  this.hideVisibleSittingMan = function() {
    this.board[ this.index(this.man.x,this.man.y) ].classList.remove('man_sitting');
  }
  this.moveMan = function(event) {
      switch(event.which) {
        case 37:
        this.man.x = this.man.x - 1;
        break;
        case 38:
        this.man.y = this.man.y - 1;
        break;
        case 39:
        this.man.x = this.man.x + 1;
        break;
        case 40:
        this.man.y = this.man.y + 1;
        break;
      }

      self.hideVisibleMan();
      self.showMan();
      self.hideAllVisibleWalkingMan();
      self.timeout();
      self.showWalkingMan();

  }

}

var game = new Game();
game.showMan();
game.showHouse();
game.showTree();



document.addEventListener('keydown', function(event){
game.hideVisibleSittingMan();
game.hideVisibleStandingMan();
game.showWalkingMan();
game.moveMan(event);

  });
