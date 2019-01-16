console.log(hello);                                   
var hello = 'world'; 
// undefined due to hoisting of hello.  When console.log runs, hello is not yet assigned.

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// 'magnet' is expected because needle variable defined inside the test() function only has a function scope.

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

//  'super cool' - the print function is not called, so the value of brendan assigned inside the print() function is not called.

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

//  'chicken' 'half-chicken' - gone will not print because var food is hoisted to the top of the eat() function, but not assigned before the console.log call.

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// syntax error on line 1 mean is 'undefined' and can't be called

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// first genre is 'undefined', since it has not been declared. rewind() function logs rock and r&b.  bottom console.log prints disco, declared outside the rewind() function

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// san jose, seattle, burbank, san jose - san jose is assigned to dojo as a global variable, so it is logged twice, at the start and end.

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

// second dojo for else if condition will cause an error because the block const variable changes from an object to a string.