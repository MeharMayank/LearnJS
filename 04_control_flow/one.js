// if
const isUserLoggedIn = true
if(2=="2"){
    console.log("executed");
}
if (2==="2"){
    console.log("executed")
}
if(2!=="2"){
    console.log("not executed")
}

// <, >, <=, >=, ==, !=, ===, !==
/*
NOTE : === not only checks whether the two values are same or not,
but also checks whether the data type are same or not. This is how 
it is different from ==.
*/

const score = 200
if(score > 100){
    let power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

/* Here an error will be shown, since power is out of 
scope on line 26 */

const balance = 1000

// Short hand way of writing a condition (Not recommended)
// if(balance > 500) console.log("test"),console.log("test2");

// Nested Loop
if(balance < 500){
    console.log("less than 500")
} else if(balance < 750){
    console.log("Less than 750")
} else {
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In")
}