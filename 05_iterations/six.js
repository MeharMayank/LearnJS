const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach((item)=>{
    // console.log(item)
    return item
})

console.log(values)

/*
From the above code, we can observe that the forEach loop cannot 
return any value as we tested with console.log and return.
*/

// Example 1 for filter() demo
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => num > 4)
console.log(newNums)
/* 
Since we already witnessed the issue with forEach or rather the
limitation of it, we can use filter() to check the condition and 
return the value.
*/

// Consider the following example :
const newNum = [1,2,3,4,5,6,7,8,9,10]
const newNum101 = newNum.filter((num1) => {
    return num1 > 4
    /* num > 4 --> this will return empty array, as it is inside
    an object scope, hence, return keyword needs to be used.*/
})
/* NOTE : If we wrote the filter parameter like line 15, we will 
get the value returned. However, if we used object ("{}") to 
define scope, then the concepts of explicit return (discussed 
under arrow function topic) would be applicable. Hence, we would
get an empty array as a result. 

So, it becomes important to use "return" keyword when using 
object to define a function (or arrow function) so we get the 
desired output. 
This is also explained on line 27.
*/

//Re-trying Example 1 using forEach approach
const newNums2 = []
myNums.forEach((num3)=>{
    if(num3 > 4){
        newNums2.push(num3)
    }
})
console.log(newNums2)