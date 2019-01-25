// parent Ninja class
class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
      
    }
  
    sayName() {
        console.log(`My name is ${ this.constructor.name }`);
    }
  
    showStats(){
        console.log(`Name: ${ this.constructor.name }, Strength: ${ this.constructor.strength } `);
    }

    drinkSake(){
        this.health += 10;
    }
  
  
}
// child Sensei class
class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, health, speed, strength);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        // by using super, we can call the parent method
        const message = super.drinkSake();
        console.log("Drink Sake to live longer");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();