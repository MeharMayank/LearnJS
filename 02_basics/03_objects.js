/* NOTE : 
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
console.log(JSUser.email) //Method 1 of accessing object
console.log(JSUser["email"]) // Method 2 of accessing object