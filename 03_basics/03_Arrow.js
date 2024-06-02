const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`)
    }
}
/* Here This keyword is used to refer to the current context of the 
scope it is in. Since, we used this.username instead of directly 
using username as a parameter for console.log, we haven't locked any 
value to that variable / property. So, we are able to use that 
context and change the value as per requirements as demonstrated on 
line 15. */
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this)

/* Here when we print This keyword in VS Code, we get
the complete context that the keyword has stored for specific
scope. However, when we console.log(this) in browser, it returns
Windows object. 

The reason is that earlier there was only one way to execute JS, that
was through a browser since the browser had the engine capable of 
executing it. These days, that engine has been taken out and we are 
today familiar with some of their offerings like Node, Deno, Bun etc.
Hence, when the engine runs in the browser, the most global object 
present there is the Window object (that's how we are able to capture
all the window events like click, form submit etc.)

However, in case of VS Code example, the output would be {} as that
is the highest level context present. */

function chai(){
    let username = "hitesh"
    console.log(this)
    console.log(this.username) /* As we can see here, context does 
    not work inside a function. */
}
chai()

/* Now we will see how can we declare functions through 
arrow functions */

// Normal Method 1
const chai1 = function(){
    let name = "Mukesh"
    console.log(this.username)
}
chai1()

// Arrow function Method
const chai2 = () => {
    let name1 = "Ramesh"
    console.log(this.username)
}
chai2()

/* ARROW FUNCTIONS
Syntax : () => {}
*/
const add2 = (num1, num2) => {
    return num1 + num2
}
console.log(add2(3,4))

/* There is one more way to use arrow functions known as Implicit 
Return. 
-----------IMPLICIT RETURN-----------
*/
// const addtwo = (num1, num2) => num1 + num2 //Method 1
const addtwo = (num1, num2) => (num1 + num2) //Method 2
/* NOTE : If we use (), we won't have to write return keyword.
However, if we use {}, we would be required to write return
keyword.
*/
console.log(addtwo(4,5))