const name = "Alpha" //Method One of declaring String
const repoCount = 50

// console.log(name + repoCount +"Value"); Obsolete way
// Modern way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('AlphaOne') //Method Two of declaring String
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)
/* 
NOTE: In slice, we can use negative values as parameters whereas in case of substring
it does not obey the negative value 
*/

const newStringOne = "  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim()) //Removes empty spaces from the string
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')) // Replaces target value with required value

console.log(url.includes('hitesh'))

const gameNameOne = new String("Hello-World-!!")
console.log(gameNameOne.split('-')) 
/*Splits the string where there are special characters inserted. Like in this case, 
there was '-' inserted between the string and hence the split function segregated the strings
into three parts as evident from the example*/