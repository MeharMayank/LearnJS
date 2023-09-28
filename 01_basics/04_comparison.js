// console.log("2">1) 
/* This is another potential issue of JS.
It allows for different data types to be compared like example here.
As we can see, JS automatically converted string into number and compared.
This is also why many use typescript as it has strict rules which gives it 
advantage over vanilla JS.
*/
// console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)
/*
The reason is that an equality check == and comparisons < <>= <= work
differently
Comparisons convert null to a number, treating it as 0. That's why (3)
null >=0 is true and (1) null > 0 is false
*/
console.log(undefined==0) //it will always give false
/* ALWAYS REMEMBER TO WRITE CLEAN CODE & AVOID SUCH BAD PRACTICES */