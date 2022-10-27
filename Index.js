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
console.log(firstName, lastName, age, adderss, color);

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

let selectedColors = ['red','blue','white'];
selectedColors[3] = 'black';
selectedColors[4] = 5;
console.log(selectedColors);
console.log(selectedColors.length);

//Perfoming a task
function one(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
one('sam', 'Arun');

//Calculating a value
function square(){

}

console.log('Hello world');

let firstName = 'sam';
let anousment = 'Hello! ';
let middleAnousment = 'Your age is ';
console.log(anousment ,firstName);

let age = 20;
age = 30;
console.log(anousment,firstName,middleAnousment,age);

let person = {
    age : 20,
    firstName : 'sam',
}
person.age = 30;
let anousments = {
    firstAnousment : 'Hello!',
    secondAnousment : 'Your age is',
}
let selection = 'firstAnousment';
anousments[selection] = 'Hi!';
anousments.firstAnousment = 'Yo...';

console.log(anousments.firstAnousment,person.firstName,anousments.secondAnousment,person.age);

let country = ['sriLanka','india','america','russia'];
country[4] = 'canada';

console.log(country);

let person = {
    age : 30, 
    name : 'Sam'
}
person.name = 'Sami';
console.log(person.name,person.age);

function greet(firstName) {
    console.log('Hello '+ firstName);
}
greet('Sam');

//Performing a task
function name(firstName,lastName) {
    console.log('Hi '+ firstName + ' ' + lastName);
}
name('Sam','Arun');
name('Jhon','Sill');

//Calculating as value
function squre(number) {
    return number* number;
}

let number = squre(3);
console.log(number);

function again(number, secondNumber){
    return number + secondNumber;
}

let number = again(50,70);
console.log(number);

function maths(number, secondNumber){
    return number - secondNumber;
}
console.log(maths(150,50));

function test(firstName,lastName) {0..0............
    return firstName + lastName;
}

console.log(test('Sam ','Arun'));

function person(name) {
    return name;
}

let anousment = 'This is';

console.log(anousment,person('Sam'));*/

//this is not working i think. Let's see.
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overtime,rate){
    return baseSalary + (overtime*rate);
}

let employee = {
    baseSalary : 30_000,
    overtime : 20,
    rate : 30,
    getWage : function() {
        return this.baseSalary + (this.overtime*this.rate)
    }
};
employee.getWage();