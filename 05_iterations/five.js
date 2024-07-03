// High Order Array loops
const coding = ["js", "ruby", "python", "java", "cpp"]

// forEach() loop in JS
coding.forEach( function (item) {
    console.log(item)
})
/*
An array already has a lot of functions and properties injected into
itself for use like map(), forEach(), length() etc. (Can be verified
through browser console).

When we are using forEach() loop, we will see the syntax as follows:

variableName.forEach( callback fn )

Now callback fn here means that the function or "task" that this
forEach will perform, must be defined here.

Now, we write the callback function as mentioned under "forEach() loop
in JS" and there we don't need a function name to begin with, also,
we can insert any variable name of our choosing as parameter
(inside parenthesis (i.e. "item" as mentioned above)) and then 
define the task accordingly.

This callback function will iterate through the array by iteself and
execute the condition defined.
*/

// Method 2 using arrow functions
coding.forEach((value) => {
    console.log(value)
}) //Note here will not write function name in case of callback fn.


/* We can also pass other functions as parameters for forEach()
and execute them.

Also, note that we only need to pass the reference (eg. "printMe")
and not execute it (eg. "printMe()"). 
*/
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

/* 
We must also note that forEach() does not fetches "item" from an array
but also fetches other information along with it. Following is the
example to demonstrate that and the types of info we can extract from
array through the use of forEach : 
*/
coding.forEach((val, index, arr) => {
    console.log(val, index, arr)
})

/*
NOTE : Sometimes we face a scenario where we have a single or
multiple objects inside an array. In that case, we may want to 
access the properties of the objects within that array. Following 
is the example / demo on how we can do so using forEach :
*/
const myCoding = [
    {
        langName : "JavaScript",
        langFileName : "JS"
    },
    {
        langName : "Golang",
        langFileName : "GO"
    },
    {
        langName : "Python",
        langFileName : "PY"
    }
]
myCoding.forEach((item)=> {
    console.log(item.langName)
    console.log(item.langFileName)
})
/* NOTE : In real world, this would be very useful while interacting
and fetching data from the DB. */