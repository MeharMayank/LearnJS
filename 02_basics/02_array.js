const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
/*
NOTE : When we use push, we push an element into an array.
So, when we pushed an array named "dc_heros" into the first array,
it pushed the second array as an element into the former.
This although combined both arrays, but it is not in desirable form.
The output would look more like the latter array being displayed 
as an element in the former array.

That's why we use concat. Now, instead of pushing the array or element as an element,
returns a new array which combines the previous two and hence, the output looks cleaner
and desirable. Hence, it is always advisable to declare a new variable for concat in order
to store the array it would return and then print that variable for desirable results.
*/
// console.log(marvel_heros[3][1])
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

/*
NOTE : 
*/
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)