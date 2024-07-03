/* Following loops are Array specific loops */
// for of loop
const arr = [1,2,3,4,5]
for (const num of arr){
    console.log(num)
}
/* the structure of for-of loop is as follows :
for (const iterator of object){
} 
Now here iterator is any thing that
we have to iterate on the "object" mentioned here. The object here
means anything that we have to iterate upon, so it isn't the same as
JS object. Here "object" has a much broader meaning.
*/

const greetings = "Hello world !"
for (const greet of greetings){
    if(greet == " "){
        continue
    }
    else{
        console.log(`Each char is ${greet}`)
    }
}

// Maps
/* The Map object holds key-value pairs and remembers the original
insertion order of the keys. Any value (both objects and primitive
values) may be used as either a key or a value. 

A key in the Map may only occur once; It is unique in the Map's 
collection.
*/
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN',"India")

console.log(map)

for (const key of map){
    console.log(key);
}
/* Here we would notice that the array is printed as it is.
In case we only want to print the key and value pairs but 
not as an array, we will use the following syntax : */
for (const [key, value] of map){
    console.log(key, ': ', value)
}

// Example with Object
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for (const [key,value] of myObject){
    console.log(key,': ', value)
}
/*
Now, if you run the above code, it will throw an error saying that 
myObject is uniterable. So, we cannot iterate through Object the 
same way we did with array and maps.

We have a different approach through iterating through objects.A
*/