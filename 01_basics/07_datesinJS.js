// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23) //Method 1
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //Method 2
// let myCreatedDate = new Date("2023-01-14") //YY-MM-DD format //Method 3
let myCreatedDate = new Date("01-14-2023") //Method 4
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
/*TimeStamp is useful when working with projects like quiz or polls and where one might 
see who attempted the fastest and similar kinds of data. We use Date.now() method 
for this. */
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// getTime() will give us time value in ms since the date an instance is created.
// This will give us time value ( in ms) which we can use to compare with each other
// It is always recommended to use ms to compare time

// If we want to convert the time obtained into second, we will use following way:
// console.log(Math.floor(Date.now()/1000)) //Here we use floor to remove decimal

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

// console.log(`${newDate.getDay()} and the month`)

/* NOTE: If we want to customize even more the Locale String, then it allows us to do so.
In LocaleString() method, it allows us to define an object within it. Following is an example
for the same : */
newDate.toLocaleString('default', {
    weekday:"long",
    // similarly we can also define other properties as well
})