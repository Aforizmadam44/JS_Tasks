const calculator= {
    num1:0,
    num2:0,
    read(){
let number1= +prompt("Write a number:")
let number2= +prompt("Write a number:")
this.num1= number1
this.num2= number2
    },
    sum(){
console.log(this.num1+this.num2);
    },
    multiply(){

    },
    divide(){

    }, 
    subtract(){

    }
}
calculator.read()
calculator.sum()
// ---------------------------------------------------------
function Car(model, history, owner){
this.model= model,
this.history= history,
this.owner=owner,
this.gazVer=()=>{
console.log(`${this.owner}  ${this.history} ilindeki ${this.model}ya qaz verir.`);
}
}
const carr= new Car("zapi", 1969, "ismail")
carr.gazVer()
// ----------------------------------------------------------
