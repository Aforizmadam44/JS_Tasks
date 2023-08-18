let number1=prompt("Write a number:")
console.log(number**(1/2))
// ---------------------------------
let celsius = +prompt("Write celsius value")
let fahrenheit = (celsius*1.8)+32
console.log("celsius :" + (fahrenheit+ "fahrenheit") )
// ---------------------------------------------------
let number2= +prompt("Write a number:")
if(number2<0){console.log(`${"Your number " + number2} is negative`)}
else if(number2>0){console.log(`${"Your number " + number2} is positive`)}
else if(number2===0){console.log(`${"Your number " + number2} is equal zero`)}
// ------------------------------------------------------------------------------
let number3= prompt("Write a number:")
if(number3%2==0){console.log(`${"Your number " + number3} is dual`);}
else{console.log(`${"Your number " + number3} is single`);}
// -----------------------------------------------------------------------------
// if and else method
let num1= +prompt("Write a number:")
let num2= +prompt("Write a number:")
let num3= +prompt("Write a number:")
if(num1>num2 && num1>num3){
    console.log(`${num1} biggest than others`)
}
else if(num2>num1 && num2>num3){
    console.log(`${num2} biggest than others`)
}
else if(num3>num1 && num3>num2){
    console.log(`${num3} biggest than others`)
}
// Math.max method
let eded1= +prompt("Write a eded1:")
let eded2= +prompt("Write a eded2:")
let eded3= +prompt("Write a eded3:")
let maximum= Math.max(eded1, eded2, eded3)
console.log(`${maximum} is maximum value`);
// -------------------------------------------
let numb1 = +prompt("Write a numb1:")
let numb2 = +prompt("Write a numb2:")
let math = prompt(`Which math operation? (+,-,/,*)`)
if(math==="+"){
    console.log(numb1+numb2);}
    else if(math==="-"){
        console.log(numb1-numb2)}
        else if(math==="/"){
            console.log(numb1/numb2)}
            else if(math==="*"){
                console.log(numb1*numb2)}
    