/*let firstName = 'Sam';
let lastName = 'Arun';
console.log(firstName,lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let firstName = 'Sam';
let lastName = 'Arun';
let age = 26;
let color = undefined;
let adderss = null;
console.log(firstName, lastName, age, adderss, color);*/

let person = {
    name:'sam',
    age:30
};
//Dot Notation
person.age = 20;

//Bracket Notation
let selection = 'name';

person[selection] = 'Sami';

console.log(person.age,person.name);