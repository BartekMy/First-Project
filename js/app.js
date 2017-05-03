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
var People = function(x, y, direction) {
  this.x = Math.floor(Math.random() * 20);
  this.y = Math.floor(Math.random() * 20);
  this.direction = Math.floor(Math.random() * 4);
}
var Game = function(board, man) {
  var self = this;
  this.board = document.querySelectorAll('#board div');
  this.man = new Man();
  this.house = new House();
  this.tree = new Tree();
  this.people = new People();

  this.index = function(x,y) {
    return x + (y * 20);
  }
  this.showPeople = function() {
    this.board[ this.index(this.people.x,this.people.y) ].classList.add('people');
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
  this.hideVisiblePeople = function() {
    document.querySelector('.people').classList.remove('people');
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
      self.checkCollision();
  }


  this.movePeople = function() {
    if(this.people.direction === 0) {
        this.people.x = this.people.x + 1;
        this.moveTimeout = setTimeout(function(){
          self.people.direction = Math.floor(Math.random() * 4);
        },Math.floor(Math.random() * 5000))
    } else if (this.people.direction === 1) {
      this.people.x = this.people.x - 1;
      this.moveTimeout = setTimeout(function(){
        self.people.direction = Math.floor(Math.random() * 4);
      },Math.floor(Math.random() * 5000))
    } else if (this.people.direction === 2) {
      this.people.y = this.people.y + 1;
      this.moveTimeout = setTimeout(function(){
        self.people.direction = Math.floor(Math.random() * 4);
      },Math.floor(Math.random() * 5000))
    } else if (this.people.direction === 3) {
      this.people.y = this.people.y - 1;
      this.moveTimeout = setTimeout(function(){
        self.people.direction = Math.floor(Math.random() * 4);
      },Math.floor(Math.random() * 5000))
    }
  }
  this.startGame = function() {
    this.idSetInterval = setInterval(function(){
      self.hideVisiblePeople();
      self.showPeople();
      self.movePeople();
    }, 500);
  }
  this.checkCollision = function() {
    if(this.board[ this.index(this.man.x,this.man.y) ] === this.board[ this.index(this.house.x,this.house.y) ]) {
      window.location = "../First-Project/me.html";
    }
  }

}

var game = new Game();
game.showMan();
game.showHouse();
game.showTree();
game.showPeople();
game.startGame();

document.addEventListener('keydown', function(event){
game.hideVisibleSittingMan();
game.hideVisibleStandingMan();
game.showWalkingMan();
game.moveMan(event);

  });
