// 1. Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun.

// let array = [];

// for (let i = 0; i < 5; i++) {
//   let numbUser = +prompt("enter num");
//   array.push(numbUser);
// }

// console.log(array);

// --------------------------------------------------------------------------------------
// 2. Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin.

// const multNumbers = (numbers) => {
//   let mult = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     mult *= numbers[i];
//   }
//   return mult;
// };
// console.log(multNumbers([1, 2, 3, 4, 5]));

// --------------------------------------------------------------------------------------
// 3. multiply(a,b,c) funksiyasi yaradin. Men ona istediyim sayda argument versem
//  bele islemelidir, hasilini geri qaytarmalidir

// if (arguments.length < 2) {
//   console.log("Enter minimum 2 arguments");
//   return;
// }

//   function multiply() {
//   let mult = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     mult *= arguments[i];
//   }

//   console.log("Mult is", mult);
// }

// multiply(1);
// multiply(2, 3);
// multiply(2, 5, 9);
// multiply(5, 6, 2, 3);

// const multiply = (...arr) => {
//   let mult = 1;
//   for (let i = 0; i < arr.length; i++) {
//     mult *= arr[i];
//   }
//   console.log(mult);
// };
// multiply(2, 3, 7);
// multiply(4, 7, 8, 9);

// --------------------------------------------------------------------------------------
