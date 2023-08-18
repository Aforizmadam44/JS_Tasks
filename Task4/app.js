let direction= prompt("Write direction to:(up,downn,right,left)")
switch(direction){
    case "up":
    console.log("Go to up");
break
    case "down":
        console.log("Go to down");
break
        case "right":
            console.log("Go to right");
break
            case "left":
                console.log("Go to left");
}
// ----------------------------------------------------------------
let weight=+prompt("Write weight value:")
let length=+prompt("Write weight length:")
let bodyMassIndex= weight/(length*length)
 if(bodyMassIndex<18.5){
   console.log("Your BMI value is low and you are weak.");
}
else if(bodyMassIndex>18,5 && bodyMassIndex<25 ){
    console.log("Your BMI value is normal and you are healthy.");
}
 else if(bodyMassIndex>25 && bodyMassIndex<30){
    console.log("Your BMI value is high and you are fat.")
}

else{console.log("Your BMI value is very high and you are obese.")}
