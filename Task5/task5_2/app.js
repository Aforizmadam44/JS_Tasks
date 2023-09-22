// A: u r best, milord 👑
function logGreeting(name){
    console.log(`${name} is a Js developer` );
} 
logGreeting("Ismail")
// --------------------------------------------
function userName(name){
    console.log((`${name} is active now`));
}
userName("Ehmed")
userName("Memmed")
userName("Veli")
// -------------------------------------------
function four(eded){
    console.log(eded**4);
}
four(4)
// --------------------------------------------
for (let i = 100; i < 1000; i++) {
    if (i % 10 === 0) {
      console.log(i);
    }
  }
// --------------------------------------------
for(let i= 11; i<100; i++){
    if(i%2==1){
        console.log(i);
    }
}
// --------------------------------------------

let sayi= +prompt("Bir eded daxil edin:")
let toplam= 0
for (let i = 100; i <= 999; i++) {
  if (i % sayi === 0) {
    toplam += i;
  }
}
console.log(toplam);
