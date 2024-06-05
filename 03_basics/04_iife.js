// Immediately Invoked Function Expressions (IIFE)

/* An IIFE is a function that is defined and executed immediately
after it is created. It helps to create a local scope for variables,
avoiding polluting the global scope.

To put it more simply, 
1. Function Expression : A piece of code that defines a function
2. Immediately Invoked : The function runs right after it's defined,
without needing to be called seperately.

Why do we use / need IIFE ?

There are certain scenarios where you may want to execute function
as soon as it is created.
Suppose you are working with a file that has a lot of DB connections,
in that case you may want to execute function as soon as it is created.
Also, you may want that as soon as the file is accessed, the DB 
connection starts (for example). For such scenarios we use IIFE.

Also, in order to protect our variables inside the function from
polluted global scope (that may arise).

[ Here Polluting the global scope means creating variables or 
  functions in the global namespace, which can lead to conflicts 
  and bugs, especially in larger codebases or when using third
  party libraries. When multiple scripts define variables with 
  the same name globally, they can overwrite each other, causing
  unexpected behaviour. This makes code harder to debug and maintain.
]

Following is the syntax of IIFE :
(function chai(){
    console.log("DB CONNECTED")
}) ();

Here we can breakdown the syntax :
() ()
So the first parenthesis is there to define the function, and the 
second one is for the execution of the same.
chai () --> Similar to this where functionName "chai" defines the
function and () executes it.

Now, one must have noticed the semicolon at the end of the function. 
It is to tell the IIFE to stop / end here. Otherwise it won't know 
the context and in the situation like below and result in error :

(function chai(){
    console.log("DB CONNECTED")
}) ()          --> semicolon missing here to demo the example

(function chai2(){
    console.log("DB CONNECTED TWO")
}) ()

Now, if we run this program it won't print output for either 
and throw an error as we have missed semicolon which causes the 
issue as mentioned above.
*/

// we can also run arrow function within IIFE
(() => {
    console.log('DB CONNECTED');
}) ();

/* For cases where we want to pass a value through our function
in iife :  */
((name) => {
    console.log(`HELLO ! ${name}`);
}) ('hitesh');

// Named IIFE example 
(function chai(){
    //named IIFE
    console.log("DB test");
}) ();

// Unnamed IIFE example
(() => {
    console.log("Test 1");
}) ();