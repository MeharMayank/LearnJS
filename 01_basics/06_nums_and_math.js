const score = 400
// console.log(score)
const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3))
/* NOTE: In "toPrecision" the priority is always given to value before decimal */

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // Default Standard = US
// console.log(hundreds.toLocaleString('en-IN'))


/*---------------MATHS-------------*/
// console.log(Math)
// console.log(Math.abs(-4)); 
//absoute value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random())
//random's value is always between 0 to 1
console.log((Math.random()*10)+1)
/* We are using this structure to ensure that the value is always above 0. Since, the value
is between 0 and 1, the value can be 0 or 1 itself. So in order to avoid getting 0, we add 1*/
console.log(Math.floor(random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)
/* Here we used (max-min+1) to define the range within which we want our random number to 
generate. Now, we add 1 to max-min in order to avoid 0 case. And since, we also want to 
define the minimum value required, we then add min to the equation. */