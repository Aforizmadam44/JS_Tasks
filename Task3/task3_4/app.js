let userName=prompt("Write your position")
if(userName==="user"){console.log("Welcome to user")}
else if(userName==="admin"){console.log("Welcome to admin")}
else if(userName==="guest"){console.log("Welcome to guest")}
else{console.log("The position is not defined")}
// ---------------------------------------------------------
let number= +prompt("Write a number:")
if(number%15===0){console.log("FizzBuzz")}
else if(number%3===0){console.log("Fizz")}
else if(number%5===0){console.log("Buzz")}
// ---------------------------------------------------------
let numb=+prompt("Write a number")
if( numb<=99 && numb>9 ){
    console.log("Your number is dual")
}

// -------------------------------------------------------------
let userNumber= +prompt("Write a number:")
if(userNumber%2===0 && userNumber%5===0){console.log("This is what i like");}
// -----------------------------------------------------------------------------
let number1 = +prompt("Write a number1:")
let number2 = +prompt("Write a number2:")
let number3 = +prompt("Write a number3:")
if((number1+number2+number3)>100){console.log("Addition exceeds 100");}
else{console.log("Math operation is not finished");}