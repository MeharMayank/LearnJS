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
// console.log(booleanIsloggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// *****************OPERATIONS*******************
let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2 //strings can only be added / concatinated but can't be subtracted
// console.log(str3)

// console.log("1"+2) //=> 12
// console.log(1+"2") //=> 12
// console.log("1"+2+2) //=> 122
// console.log(1+2+"2") //=> 32   For more details, refer to ECMAScript Docs

// console.log(true) //=>true
// console.log(+true) //=> 1 as value is being added to boolean
// console.log(+"") //=> 0

let num1, num2, num3
num1 = num2 = num3 = 2+2 //not preferred
let gameCounter = 100
gameCounter++
// console.log(gameCounter) //postfix operator
++gameCounter
console.log(gameCounter) //prefix operator