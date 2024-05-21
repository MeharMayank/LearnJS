/* NOTE : 

iA constructor in JavaScript is a function used to create and 
initialize objects, while a singleton is a design pattern that ensures
a class has only one instance and provides a global point of access to
it.

There are two ways to declare an object. First : as a Literal
Second : as a Constructor
singleton : object created through constructor is always a singleton,
i.e. it will be one of a kind, however, whenever we create an object
through a literal, then singleton will not be formed
In case of constructor, we create an object like this :
----------Object.create------------------
*/

// Object literals
const JSUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudhary",
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Sunday"]
}
/*
NOTE : keys are also stored as strings in the system, however
we need not write them as strings since the system automatically
considers keys as a string.
*/
// console.log(JSUser.email) //Method 1 of accessing object
// console.log(JSUser["email"]) // Method 2 of accessing object
// console.log(JSUser["full name"])
/*
NOTE : Method 2 is preferred over Method 1. For example, consider
that a key has been declared in the form of a string, now, there is no 
possibility that the key could be accessed through Method 1, it has to be
accessed through Method 2 only. It has been demonstrated in code above.
*/

// HOW TO USE SYMBOL AS A KEY AND PRINT IT ?
const mySym = Symbol("key1")
const JSUser1 = {
    mySym : "mykey1", //Tag 1
    [mySym] : "mykey2" //Tag 2
}
// console.log(typeof JSUser1.mySym)
// console.log(JSUser1[mySym])
// console.log(JSUser1)
/* 
NOTE : We cannot directly use Symbol as a key. When we will check the type of 
this key, we will notice that it is being treated as string and not as symbol.
Hence, that's why we can't directly use symbol as key for an object (Tag 1).
The correct way to do so is shown as in Tag 2 i.e. [Symbol Name] : "Value".
*/
JSUser.email = "hitesh@chatgpt.com" //Updating Values in an Object
// Object.freeze(JSUser)
/* NOTE : After using Object.freeze(obj name), any changes made to the
object will not reflect as we have freezed that object. It will not show any error even if we 
try to modify the object after freeze but it will not modify.*/
JSUser.email = "hitesh@microsoft.com"
// console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JSUser.greeting) 
/*
Here it would just return an reference to a function since we didn't 
use () while calling the function 
*/
console.log(JSUser.greeting())
JSUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`) //string interpolation
}
// By using "this" keyword, we can access all properties from the same object
console.log(JSUser.greetingTwo())