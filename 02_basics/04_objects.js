// Using Constructor Method
// const tinderUser = new Object() --> Singleton object
// const tinderUser = {} --> Non singleton object
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}
// We can do as much nesting as we want with objects.
// console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) //Efficient method
const obj3 = {...obj1,...obj2} //However, we will still use spill operator
console.log(obj3)
/*
NOTE : Here we use empty curly parenthesis (which is optional by the way),
(however it is recommended to use) as it ensures that all the values will 
get combined and we will get a result for sure.
*/