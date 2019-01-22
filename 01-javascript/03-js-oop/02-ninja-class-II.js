function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
      console.log("My ninja name is " + this.name);
    }

    this.showStats = function() {
      console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
    }

    this.drinkSake = function() {
      this.health += 10;
      return this
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");


Ninja.prototype.punch = function(ninja2) {
    if (ninja2.constructor != Ninja) {
      console.log("Ninja mismatch")
      return
    }
    ninja2.health -= 5;
    console.log (`${this.name} punched ${ninja2.name} and did 5 damage!`)
  }

Ninja.prototype.kick = function(ninja2) {
    if (ninja2.constructor != Ninja) {
      console.log("Ninja mismatch")
      return
    }
    var strength = this.getStrength;
    ninja2.health -= 15;
    console.log(`${ninja2.name} was kicked by ${this.name} and lost 15 damage!`)
  }


  redNinja.punch(blueNinja);
  blueNinja.kick(redNinja);