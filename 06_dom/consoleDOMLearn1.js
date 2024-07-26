/* This JS code will contain all DOM codes 
used for practice on the browser. Ref : one.html
*/
document.getElementById('title')
// Displays the code within that element
document.getElementById('title').id
// Displays the id value of the element
/* Although, it may seem counterintuitive at first since we are 
asking id by giving element id as parameter, however, there may be
cases where we may be interested. For eg. in case of classes. */

document.getElementById('title').class
//undefined
document.getElementById('title').className
// This will show us the class of the element, not line 12.
// In this case, the output will be : 'heading'

document.getElementById('title').getAttribute('id')
// output --> 'title'
document.getElementById('title').getAttribute('class')
// output --> 'heading'

/*
We can also set attributes using setAttribute() function. Similar to
getAttribute() it helps us manipulate the DOM but instead of fetching
attribute data,it helps us set the attributes for a said element.
*/
document.getElementById('title').setAttribute('class','test')
// output --> undefined
/*
Now here we may have received "undefined" as an output, but this
setAttribute overrides and the changes are visible in the "Elements"
section of the browser.
Here although on line 15 of one.html, although the id and class
remain unchanged, when we write line 28 on the Chrome Browser Console,
and run it, we will then see in the Elements section, that the id 
and class of one.html is updated with latest values run in the
console (which in this example is class name change to 'test').
*/

const title = document.getElementById('title')
title.style.backgroundColor = 'green'
// 'green'
title.style.padding = "15px"
//'15px'
title.style.borderRadius = "5px"
// '5px'
title.style.borderRadius = "15px"
// '15px'
title
/* <h1 id="title" class="heading" style = "background-color:green; 
padding: 15px; border-radius: 15px;">
DOM learning on Chai aur Code</h1>
*/
title.textContent
// 'DOM learning on Chai aur Code'
title.innerHTML
// 'DOM learning on Chai aur Code'
title.innerText
// 'DOM learning on Chai aur Code'

/* NOTE : The difference between innerText and textContent is that
the innerText will only display the items inside an element.

However, textContent displays all the text including the ones that
have been hidden with help of some display or css properties.

This can be verified from line 15 of one.html, as since the text under
the span tag is hidden using the display property, innerText won't show
that part. However, the textContent would show all the text including
the one hidden.

Use of any one of the above is upto the use case.

In case of innerHTML, any HTML tags used within that scope would also
be returned and displayed. This is the difference between this and the
above two. innerText and textContent exclusively deal with text where
as innerHTML also supports HTML tags.
*/

/* Query Selectors Of Interest */
document.querySelector('h2')
// <h2>Lorem ipsum dolor sit.</h2>
/* Here querySelector() function selects only one query at a time.
Like here there are two h2 tags but the function selected the first
occurance of the tag only. */
document.querySelector('#title')
// <h1 id="title" class="heading">...</h1>
// # is used for id. Here we are looking for id "title".
document.querySelector('.heading')
// <h1 id="title" class="heading">...</h1>
// . is used for class. Here we are looking for class "heading".
document.querySelector('input[type="password"]')
// One can also use CSS selectors with attributes like input with
// attributes like type="password"
document.querySelector('ul')
// <ul>...</ul>
const myul = document.querySelector('ul')
myul.querySelector('li')
// <li>...</li>
const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor = "green"
turnGreen.style.padding = "10px"
turnGreen.innerText
// 'one'

document.querySelectorAll('li')
// NodeList(3) [li, li, li]

const tempLiList = document.querySelectorAll('li')
/* NodeList is not an array. Because if we open NodeList prototype
section in console of the browser, we can find foreach but we won't 
be able to find map etc. Remember, an array always has maps etc. in
its prototype which is not the case with the NodeList.

NodeList is very similar to Array but not the same.*/