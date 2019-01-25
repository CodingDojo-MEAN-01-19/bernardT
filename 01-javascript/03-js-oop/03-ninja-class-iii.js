// parent Ninja class
class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
      
    }
  
    sayName() {
        console.log(`My name is ${ this.name }`);
    }
  
    showStats(){
        console.log(`Name: ${ this.name }, Health: ${ this.health }, Speed: ${ this.speed }, Strength: ${ this.strength } `);
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
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();