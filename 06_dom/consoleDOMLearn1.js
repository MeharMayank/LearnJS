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

*/