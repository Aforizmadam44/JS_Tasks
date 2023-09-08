// 1. Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun.

let array = [];
array.length = 5;
for (let i = 0; i < array.length; i++) [console.log(prompt("Write 5 numbers"))];

// --------------------------------------------------------------------------------------
// 2. Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin.

const sumNumbers = (numbers) => {
  let mult = 1;
  for (let i = 0; i < numbers.length; i++) {
    mult *= numbers[i];
  }
  return mult;
};
console.log(sumNumbers([1, 2, 3, 4, 5]));

// --------------------------------------------------------------------------------------
// 3. multiply(a,b,c) funksiyasi yaradin. Men ona istediyim sayda argument versem
//  bele islemelidir, hasilini geri qaytarmalidir

function multiply() {
  if (arguments.length < 2) {
    console.log("Enter minimum 2 arguments");
    return;
  }

  let mult = 1;
  for (let i = 0; i < arguments.length; i++) {
    mult *= arguments[i];
  }

  console.log("Mult is", mult);
}

multiply(1);
multiply(2, 3);
multiply(2, 5, 9);
multiply(5, 6, 2, 3);

// --------------------------------------------------------------------------------------
