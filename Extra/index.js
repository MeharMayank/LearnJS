console.log('hello world');
let name='Mosh';
console.log(name);

let person = {
    name: 'Mosh',
    age: 30
};

// There are two ways to access this name property
// First is, Dot Notation
person.name = 'John';
// we can also use the dot notation to read the value of the property
console.log(person.name);
// The other way is to use the bracket notation
person['name'] = 'Mary';
console.log(person.name);

// In some cases, the user may select a property dynamically, so we can have another variable which selects the target property the user is selecting
let selection = 'name';
person[selection] = 'Adam';
console.log(person.name);


let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
// Since, JS is a dynamic laguage, the length of the array is also dynamic and can change with the runtime
// Hence, we were able to add  a new element in the array, and also the objects in the array and the size of the array are dynamic
selectedColors[3] = 1;
console.log(selectedColors.length);

function greet(name){
    console.log('Hello ' + name);
}
greet('Adam');
//NOTE: default value for variables in JS is undefined

function square(number){
    return number*number;
}
console.log(square(2));