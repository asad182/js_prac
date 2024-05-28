const accountId = 182
let accountEmail = "asad@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;

//accountId = 2
accountEmail = "zain@gmail.com"
accountPassword = "6969"
accountCity = "Fsd"
console.log(accountId);

/*
Prefer not to use var
because of issue of block scope and functional scope
*/
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])