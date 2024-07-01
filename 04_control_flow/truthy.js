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