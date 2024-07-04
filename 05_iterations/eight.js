/*  Reduce Method (Used in shopping carts etc.)

        Syntax (Ref : MDN Docs) : 

const array = [1,2,3,4];

const initial Value = 0;
const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

Here the accumulator takes initialValue for the first time only,
after which during second iteration, it takes the final sum.  
It continues this way until the iteration is complete.
*/
const myNums = [1,2,3]
const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`acc : ${accumulator} and curval : ${currentValue}`)
    return accumulator + currentValue
}, 0) // Here 0 is the accumulator value since accumulator needs to
// know the starting point
console.log(myTotal)

// Reduce method implementation using arrow function
const myTotal2 = myNums.reduce ((acc, curval) => acc + curval, 0)
console.log(myTotal)

//Example 1 : 
const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "Android Dev Course",
        price : 5999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    }
]
const TotalPrice = shoppingCart.reduce((acc1, item) => acc1 + item.price, 0)
console.log(TotalPrice)