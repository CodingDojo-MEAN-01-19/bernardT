
Solution One
solution_1
<!DOCTYPE html>
<html>
<head>
	<title>Ninja Class III</title>
	<script type="text/javascript">

	// Part I
	class Ninja {
		constructor(name) {
			this.name = name;
			this.speed = 3;
			this.strength = 3;
			this.health = 100;
		}

		sayName() {
			console.log(`My ninja name is ${this.name}`);
		}

		showStats() {
			console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
		}

		drinkSake() {
			this.health += 10;
			return this;
		}

	}

	// Part II
	class Sensei extends Ninja {
		constructor(name) {
			super(name);
			this.speed = 10;
			this.strength = 10;
			this.wisdom = 10;
			this.health = 200;
		}

		speakWisdom() {
			super.drinkSake();
			console.log("What one programmer can do in one month, \ntwo programmers can do in two months.");
		}

		showStats() {
			console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
		}
	}

	const superSensei = new Sensei("Master Splinter");
	superSensei.speakWisdom();
	superSensei.showStats();

	</script>
</head>
<body>

</body>
</html>