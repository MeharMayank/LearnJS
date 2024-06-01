// Reason we don't use var / avoid var in JS
/*
Let's take an example.

if(true){
    let a = 10
    const b = 20
    var c = 30 // Test variable 1
    //c = 30 // Test variable 2
}

console.log(a)
console.log(b)
console.log(c)


Here when you will run console log for a, b and c, we get to notice 
something interesting.

For a and b, the output is not printed as expected since the scope
of console.log and that of the variable declared are different.

But in the case of Test variable 1 and 2, the output gets printed.
Now, this is a problem. Suppose anyone added this line of code
above the if statement  :

let c = 300

Ideally one would expect that the console.log would print 300 as 
result for c, but that is not the case here. Here the problem arises,
Even though there has been a value assigned in the same scope for the 
same variable, the output would still show 30. 

This is a big trouble. Suppose many programmers are working on a file
and somebody imports a method from other file which contains this 
kind of variable declared, and suppose the other programmers working
using the same variable name would find that the result is not ideal
as the output would that be of the imported file. This is a big issue
and hence, we avoid using var in general because it causes scope related
problems.
*/

/*
Q. WHAT IS A SCOPE ?

Ans. A scope is the context in which variables, functions, and objects
are accessible and can be referenced, typically determined by the 
location where they are declared (eg. global, function, or block scope).

GLOBAL SCOPE : Variables are accessible throughout the entire code

FUNCTION SCOPE : Variables are accessible only within the function 
they declared

BLOCK SCOPE : Variables are accessible only within the block(within
curly braces '{}')
*/

let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER SCOPE: ", a)
}

for (let i=0;i<Array.length;i++){
    const element = array[i]
}

console.log(a)


/* NESTED SCOPE */
// EXAMPLE 1
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)
    two()
}
one()
// EXAMPLE 2
if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username+website)
    }
    console.log(website)
}
console.log(username)

// INTERESTING EXAMPLE
function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)
/* 
As noted above, we saw two methods of declaring functions.
However, the second approach is often called expression. 

Now suppose the following example :

addone(5)
function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}

Here addone(5) will execute flawlessly since this structure of 
declaring and using function before defining them is supported in JS.

But for the second part i.e. addTwo(5), an error will be shown. Since
here we are not only declaring a function but also storing it in a
variable, a different set of conditions will apply here and we would 
only be able to execute addTwo() after we have defined the function
but not before it.

*/