const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

/* Here since the variable userEmail has string and it is not empty,
the condition considers as true and hence executes the code.
This is called truthy value as here no comparisons were made and
a string value was assumed as true. */


const userEmail1 = ""
if(userEmail1){
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

/* Here again we observe that the absense of any string value has 
been considered as equivalent of false value without any comparisons
taking place. This is called falsy value. */

/* 
--------------------
falsy values
--------------------
1. false
2. 0
3. -0
4. BigInt 0n
5. ""
6. null
7. undefined
8. NaN (Not a Number)

All the rest values not mentioned here are considered as true /
truthy values. 

However following are some of the truthy values.
------------------------
truthy values
------------------------
1. "0" (Zero inside String is always a truthy value)
2. 'false' (same is the case with false. Any value inside string
becomes truthy values)
3. [] (Array)
4. {} (Object)
5. function(){}  (Empty Function)
*/

/* Way to check for an array */
if(userEmail.length === 0){
    console.log("Array is empty");
}
/* Note: here it is assumed that the data type of the array is 
int.

Now, in case we have to check whether an object is empty or not 
in conditions , following is the method : 
*/

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined
let val1
val1 = 5 ?? 10
/*
Sometimes while interacting with the database, or fetching from the
DB we may get values like null or undefined which may disturb our 
codebase, so to mitigate that we use Nullish Coalescing Operator.
It allows us to take such unexpected values from DB like null 
and undefined and treat them accordingly without disturbing the code.

So in case we get null as a value, we will assign null as input 
and proceed accordingly, same is the case with undefined. However,
in case we get some other values (returned from some function or
something else) with these null or undefined values, we will then
assign those values and proceed accordingly.

So, this operator in short, does safety check in case we get
null or undefined as returned value from the DB.

Note : In case we get a statement like this :
val1 = null ?? 10 ?? 20 (This case is very rare)
In this case, the operator will always return the first value (here
10).
*/
console.log(val1)
val1 = null ?? 10
console.log(val1)


// Ternary Operator
// condition ? true : false
const IceTeaPrice = 100
IceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")