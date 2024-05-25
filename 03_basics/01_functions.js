function sum(num1,num2){
    console.log(num1+num2)
}
sum(3,4)
sum(3,"4")
/* Now the problem with this approach is that since we know there are
some quirks of JS, if we add digits of String data type, it will be 
processed and an answer be generated. This anamoly occurs because
of the fact that we haven't defined any condition or checks in place
which would verify if the provided value in the argument is integer 
or not.

Also, as we may have noticed in the above example that we needn't 
define data type as JS would complete the given operation anyway, we
just need to make sure that the checks and conditions are in place 
to ensure that the operation takes place between two similar data types
only.
*/
const result = sum(3,null)
console.log("Result : ",result)
/* When we will run the example above, we will notice that the 
ouput is "undefined" even though we may have observed console.log 
printing a definitive result. However, console.log only prints the 
result (in this case) of the operation between the operands. It does
not mean that the value is being returned to the function as we have
to do that through a different method discussed below. */

/* METHOD 1 */
function add2sum(num11,num12){
    let result1 = num11+num12
    return result1
}

const result1 = add2sum(3,5)
console.log("Result: ",result1)

/* METHOD 2 */
function add2num(num21,num22){
    return num21+num22
}
const result3 = add2num(3,5)
console.log("Results: ",result3)


function loginUserMessage(username){
    return `${username} just logged in`
    /* This dynamic string which can incorporate variables into it 
    and hence allow us to show data dynamically is called String
    Interpolation (Process Name) / Interpolated String. */
}

loginUserMessage("hitesh")
/* NOTE : Since here we have only returned the value to the function,
hence, we are not able to see any output printed since there is no way 
to print it. Because the return statement only returns the value into 
the function but does not print it. It's upto us how we utilize that
returned data.

Here we did that by using console.log() message.
*/
console.log(loginUserMessage("hitesh"))

function loginUseMsg(username1){
    if(username1===undefined){
        console.log("Please enter a username")
        return
    }
    return `${username1} just logged in`
}
console.log(loginUseMsg())

// ANOTHER WAY OF WRITING THE SAME ABOVE FUNCTION
function loginUseMsg1(username2 = "sam"){
    if(!username2){
        console.log("Please enter a username")
        return
    }
    return `${username2} just logged in`
}
// Here "sam" is default value
console.log(loginUseMsg1())

function calculateCartPrice(num10){
    return num10
}
console.log(calculateCartPrice(200,400,500))

/* 
SPREAD OPERATOR
---------------
The spread operator can be used to combine items from different sources 
into one collection.
*/
const firstBowl = ['pawpaw', 'cucumber', 'watermelon'];
const secondBowl = ['Pineapple', 'Apple', 'banana'];
const thirdBowl = ['cashew nut', 'Date', 'Strawberry'];
const fruitMix =  [...firstBowl, ...secondBowl, ...thirdBowl];
console.log(fruitMix);

/*
REST OPERATOR
--------------
The rest operator collects multiple amounts of something into a single 
container for processing, such as age calculation we performed.
*/
function calculateTotalAgeOfGuest(hostAge, ...guestAges) {
  let totalAge = hostAge;
  for (const age of guestAges) {
    totalAge += age;
  }
  return totalAge;
}

const hostAge = 30;
const guestAges = [25, 28, 10, 5];
const totalAge = calculateTotalAgeOfGuest(hostAge, ...guestAges);

/* 
Q. What would be the value returned by num101 in the following code ?
*/ 
function calculate(val1,val2,...num101){
    return num101
}
console.log(calculate(200,3000,400,500,1000))
/* 
Ans : 400, 500, 1000
Because the values 200 & 3000 will be taken as input by val1, val2.
Rest of the values will be taken by ...num101 which is using Rest 
operator.
*/

/*
We can handle objects and arrays using function as well. Following
are the examples of the same : 
*/
const user = {
    username: "hitesh",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user) METHOD 1
handleObject({
    username : "Sam",
    price: "400"
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray)) METHOD 1
console.log(returnSecondValue([200,400,500,1000]))