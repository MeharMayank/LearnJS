//Arrays
const myArr = [0,1,2,3,4,5]
const myHeros = ["Marvel", "DC"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])

// Array methods
// myArr.push(6) //adds value to the array
// myArr.push(7)
// myArr.pop() //removes the last value from the array
// console.log(myArr)

// myArr.unshift(9) //adds new element in the beginning of an array
// console.log(myArr)

// myArr.shift() // removes element from the beginning of an array
// console.log(myArr)
// console.log(myArr.includes(9)) 
//Determines whether an array includes a certain element, returning true or false as appropriate
// console.log(myArr.indexOf(9)) 
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present
// console.log(myArr.indexOf(3))
// console.log(myArr)

const newArr = myArr.join()
//Adds all the elements of an array into a string, separated by the specified separator string
console.log(myArr)
console.log(newArr)

// slice, splice
/* slice : returns a section of the array
splice : Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

NOTE :: DIFFERENCE BETWEEN slice AND splice
----------------------------------------------------------------- 
slice does not manipulate the original array whereas the splice does
manipulates the original array as it cuts out the particular range from the array itself 
*/
console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)