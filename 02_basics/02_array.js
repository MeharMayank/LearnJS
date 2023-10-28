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
NOTE : We usually prefer spill operator over concat because here
we are not restricted and we can simply add more variables / arrays to merge
as parameters. Following is an example of implementation of spill operator.
*/
const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
/*
flat operator : Returns a new array with all sub-array elements 
concatenated into it recursively up to the specified depth.
The parameter it takes is the depth till you want it to operate,
however you can just write Infinity as parameter and it will search 
till total depth. However, it not recommended and one must always
enter required depth as parameter.
*/
console.log(real_another_array)