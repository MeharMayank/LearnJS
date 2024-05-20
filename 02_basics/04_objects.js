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
// console.log(obj3)
/*
NOTE : Here we use empty curly parenthesis (which is optional by the way),
(however it is recommended to use) as it ensures that all the values will 
get combined and we will get a result for sure.
*/
const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) 
/*
Displays data in array form like keys and values but in the 
form of key-value pair
*/
console.log(tinderUser.hasOwnProperty(isLoggedIn))

/* 
------------------ 
OBJECT DESTRUCTURE
------------------ 
*/

const course={
    coursename:"js in hindi",
    price:"ggg",
    courseInstructor:"hitesh"
}
/* 
Suppose we want to print course.courseInstructor multiple times
but don't want to type "course.courseInstucture" multiple times.
Hence, we can use the following syntax which will allow us to use 
"courseInstructor" instead of "course.courseInstructure". 
*/
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor)

/* 
We can also modify the name for our working use by using the 
following syntax :
*/
const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);
