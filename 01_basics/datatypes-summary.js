/*
Primitive
7 types: String, Number, Boolean, null, undefined, 
Symbol(used for making an id unique that is being used at multiple areas), 
BigInt(used for working with large scientific numbers)
*/

const id = Symbol('123') 
const anotherId = Symbol('123')
// console.log(id == anotherId) /*Even though the values of these variables 
// or id's may be same but since they are in Symbol, 
// they will have unique ids*/

/* 
Reference (Non primitive)
Array, Objects, Functions
*/
const heros = ["batman", "Doctor Strange", "Spiderman"];
let myObj = {
    name:"hitesh",
    age:22,
}
const myFunction = function(){
    // console.log("Hello World");
}

// console.log(typeof id)
/*Almost all non-primitives will return their data type as object*/

/****************************************************************/
//  ----------------MEMORY---------------

// Stack(Primitive), Heap(Non- Primitive)
// STACK EXAMPLE  (Changes occur at copy of the original source)
let myYoutubename = "abs"
anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename)
console.log(anothername)

// HEAP EXAMPLE (Changes occur at original source)
let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)