var Man = function(x, y) {
  this.x = 9;
  this.y = 9;
}
var House = function(x, y) {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
}
var Tree = function(x, y) {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
}
var Zombie = function(x, y, direction) {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
  this.direction = Math.floor(Math.random() * 4);
}
var Game = function(board, man) {
  var self = this;
  this.board = document.querySelectorAll('#board div');
  this.man = new Man();
  this.house = new House();
  this.tree = new Tree();
  this.zombie = new Zombie();

  this.index = function(x,y) {
    return x + (y * 10);
  }
  this.showZombie = function() {
    this.board[ this.index(this.zombie.x,this.zombie.y) ].classList.add('zombie');
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
  this.hideVisibleZombie = function() {
    document.querySelector('.zombie').classList.remove('zombie');
  }
  this.hideVisibleMan = function() {
    document.querySelector('.man').classList.remove('man');
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
      self.stopMan();
      self.hideVisibleMan();
      self.showMan();
      self.checkCollision();
      self.gameOver();
  }
  this.stopMan = function() {
    if(this.man.x > 9) {
      this.man.x = this.man.x - 1;
    } else if (this.man.x < 0) {
      this.man.x = this.man.x + 1;
    } else if (this.man.y > 9) {
      this.man.y = this.man.y - 1;
    } else if (this.man.y < 0) {
      this.man.y = this.man.y + 1;
    }
  }

  this.moveZombie = function() {
    if(this.zombie.direction === 0) {
      if(this.zombie.x == 9) {
        self.zombie.direction = 1;
        console.log("right");
      } else {
        this.zombie.x = this.zombie.x + 1;
        this.moveTimeout = setTimeout(function(){
          self.zombie.direction = Math.floor(Math.random() * 4);
        },Math.floor(Math.random() * 5000));
      }
    } else if (this.zombie.direction === 1) {
      if (this.zombie.x == 0) {
        self.zombie.direction = 0;
        console.log("left");
      } else {
      this.zombie.x = this.zombie.x - 1;
      this.moveTimeout = setTimeout(function(){
        self.zombie.direction = Math.floor(Math.random() * 4);
      },Math.floor(Math.random() * 5000));
    }
    } else if (this.zombie.direction === 2) {
      if (this.zombie.y == 9) {
        self.zombie.direction = 3;
        console.log("bottom");
      } else {
      this.zombie.y = this.zombie.y + 1;
      this.moveTimeout = setTimeout(function(){
        self.zombie.direction = Math.floor(Math.random() * 4);
      },Math.floor(Math.random() * 5000));
    }
    } else if (this.zombie.direction === 3) {
      if (this.zombie.y == 0) {
        self.zombie.direction = 2;
        console.log("up");
      } else {
      this.zombie.y = this.zombie.y - 1;
      this.moveTimeout = setTimeout(function(){
        self.zombie.direction = Math.floor(Math.random() * 4);
      },Math.floor(Math.random() * 5000));
    }
    }
    self.gameOver();
  }

  this.startGame = function() {
    this.idSetInterval = setInterval(function(){
      self.hideVisibleZombie();
      self.showZombie();
      self.moveZombie();
    }, 200);
  }
  this.checkCollision = function() {
    if(this.board[ this.index(this.man.x,this.man.y) ] === this.board[ this.index(this.house.x,this.house.y) ]) {
      window.location = "../First-Project/me.html";
    }
  }
  this.gameOver = function() {
      if(this.board[ this.index(this.man.x,this.man.y) ] === this.board[ this.index(this.zombie.x,this.zombie.y) ]) {
        clearInterval(self.idSetInterval);
        var over = document.querySelector('#over');
        var end = document.createElement('h1');
        end.innerHTML = "GAME OVER";
        over.classList.remove('invisible');
        over.append(end);
        self.hideVisibleMan();
      }
    }
}

var game = new Game();
game.showMan();
game.showHouse();
game.showTree();
game.showZombie();
game.startGame();

document.addEventListener('keydown', function(event){
game.moveMan(event);

  });
