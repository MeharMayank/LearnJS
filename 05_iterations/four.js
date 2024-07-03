const myObject = {
    JS : 'javascript',
    CPP : 'C++',
    RB : 'ruby',
    Swift : 'Swift by Apple'
}
// for in loop
for (const key in myObject){
    console.log(key)
}
/* Here we can notice that we used for-in loop. This does not mean
that it exclusively is used for objects but incase we need to iterate
through an object, we will use for-in loop. */

for (const key in myObject){
    console.log(`${key} for shortcut is for ${myObject[key]}`)
}
/* In the above code, we demonstrated how we can 
show the key-value pair using for-in loop. */

const programming = ['js','cpp','java','py']
for (const key in programming){
    console.log(key)
}
/* 
NOTE : As we may have noticed in the above code, that when we tried
to iterate an array through for-in loop, it returned only the key 
values (ie. 0,1,2,3,4).

Now, you must know that array also has key-value pairs. For arrays
the key value is numerical starting with 0 (you can say similar 
to index values).

However, since for-in loop only returns key values, we use 
for-of loop for iterating through arrays. This is also a partial
reason why Objects were created in the first place. 

This is the only difference between for-in and for-of loops, that the 
former returns key values only while the latter returns value.
*/

for(const key in programming){
    console.log(programming[key]);
}
/* Above was the method through which we can display value from an
array using for-in loop */

/* NOTE : In case of maps, even for-in loop won't work on it because
it is not iterable. There are ways to do that but wrt to this topic,
since we are talking about loops, since map is not iterable, for-in 
loop won't work on it. */