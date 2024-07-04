const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num) => num + 10)
console.log(newNums)
/* One of the main differences between map and filter is that the map
iterates through all the elements while filter operates on the specific
elements which matches the condition given.
*/

// Chaining
/* Chaining allows us to run multiple methods on the same element
within a single / same statement. This way browsers do not have to 
find same elements more than once. */
const newNums1 = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1 )
                .filter((num)=> num >= 40)
console.log(newNums1)