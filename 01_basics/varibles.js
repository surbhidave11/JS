const accountID = 12345 //unchangeable
let emailId = "surbhi11@gmail.com"
var accountPass = "Surbhi1234"
accountCity = "Indore" // JS ,mein bina declare kare bhi memory allocate ho jati hai. We always do not need to declare it.
let accountState; // JS will consider this as a undefined as we haven't initialised any value to it .

//accountID = 2 
// In JS variables can be described into two ways one is "let" and the other is "var" but majorly we don't use "var" becuase 
//it does't knows the scope of the {},for,etc . scope ke bases par kaam nhi krti thi . bugs aajate the . Then LET comes as a 
//surviour . prefer not to use var because of block scope and functional scope 
emailId = "sd@gmail.com"
accountPass = "Surbhi12345678 "
accountCity = "US"
console.log(accountID)
console.table([accountID, emailId, accountPass, accountCity, accountState])  