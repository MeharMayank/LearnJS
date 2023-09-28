// let score = 33   //test 1
// let score = "33" //test 2
// let score = "33abc" //test 3
// let score = null    //test 4
let score = undefined  //test 5
//let score = true     //test 6

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) //converts score's value into number
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/*
We can deduce the following from the above tests:
"33" => 33
"33abc" => NaN (although it's type is a number but it's Not a Number(NaN))
true => 1 ; false => 0
*/

// let isloggedIn = true
// let isloggedIn = "" //=> false but " " => true
let isloggedIn = "hitesh" //=> true
let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn)