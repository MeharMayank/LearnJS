const accountId = 12245;
let accountEmail = "alpha@google.com";
var createPassword = "12345";
accountCity = "Jaipur"; //variable can also be declared this way, although let is preferred over this and var method
// accountId = 2; //Not allowed
accountEmail = "delta@google.com";
let accountState 
// Also, using or not using ';' is completely upto the user
createPassword = "45678";
accountCity = "Bengaluru";
console.table([accountId, accountEmail, createPassword, accountCity, accountState]);
/*
NOTE ::
Prefer not to use var because of issue in block scope and functional scope
In modern times, we only use either const (for declaring constants) and let (for variables)
*/