var myString: "this is a string";

// myString = 234;

// const array: (string|number|boolean)[]= [];
//custom
const array: BoolStrNum[]
type BoolStrNum = string | number | boolean;

array.push('string content');
array.push(2345);
array.push(true);

//display content

const first = array[0];

//typecasting
const first = <string>array[0];

const first = array[0] as string;

//interface

interface IUser{
    name: string;
    age: number;
}




//how to run it as javascript
//use tsc = typescript compiler
//npm i -g typescript
//tsc main.ts

