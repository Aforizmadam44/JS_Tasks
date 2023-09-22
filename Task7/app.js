// A: live legend 🐱‍💻
// repeatedSymbolCounter('ALIONALI', 'A') // return 2 -> must be done with for loop!!!!

let a = "ALIONALI";
let b = "A";
let c = "";
for (let i = 0; i < a.length; i++) {
  if (a.charAt(i) == b) {
    c = c + b;
  }
}
console.log(c);

// ------------------------------------------------------------------------------------
// capitalize(str) -> alion -=> Alion

let str = "alion";

console.log(str[0].toUpperCase() + str.slice(1, str.length));
// ------------------------------------------------------------------------------------
// snakeToKebab(str) -=> SNAKE_CASE to kebab-case -=> BU_TEST_UCUNDUR -> bu-test-ucundur

let snakeToKebab = "BU_TEST_UCUNDUR";
console.log(snakeToKebab.toLowerCase().split("_").join("-"));
// ------------------------------------------------------------------------------------
// nameFormat(str) —> Alion GreenHeart-=> Alion G.

let nameFormat = "Alion GreenHeart";
let dot = ".";
console.log(nameFormat.slice(0, 7) + dot);

// ------------------------------------------------------------------------------------

// Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('alion', "A") // Alion

function changeFirstLetter(word, firstLetter) {
  let result =
    word.charAt(0).replace("a", firstLetter) + word.slice(1, word.length);
  return result;
}
console.log(changeFirstLetter("alion", "A"));
// ------------------------------------------------------------------------------------
// 1. Write a JavaScript function to split a sentence (JS funksiyasi yazin,
//      cumle verilir, cumledeki sozleri ayirsin).

let sentence =
  " How many lives do we live? How many times do we die? They say we all lose 21 grams... at the exact moment of our death. Everyone. And how much fits into 21 grams? How much is lost? When do we lose 21 grams? How much goes with them? How much is gained? How much is gained?";
function separateSentence(sentence) {
  let result = sentence.split(" ");
  return result;
}
console.log(separateSentence(sentence));
// ------------------------------------------------------------------------------------
// 2. Write a JavaScript function to split a sentence (JS funksiyasi yazin,
// (Alion GreenHeart -> Alion G.)

let str2 = "Alion GreenHeart";

function splitSentence(str) {
  let name = str.replace(str.slice(6, str.length), "G.");
  return name;
}
console.log(splitSentence(str));

// ------------------------------------------------------------------------------------
// 3. removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin,
//  sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi.

let name = "Alion";
function removeCharacterFromString(name, firstLetter) {
  let result = name.replace(firstLetter, " ");
  return result;
}
console.log(removeCharacterFromString("Alion", "A"));

// ------------------------------------------------------------------------------------
// 4. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir,
//  ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

let gmail = prompt("Write your email adress:");
function verifyGmail(gmail) {
  if (gmail.endsWith("@gmail.com") && gmail.length === 15) {
    return true;
  } else {
    return false;
  }
}
console.log(verifyGmail(gmail));
// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------

// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli
// olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

let ac = +prompt("number:");
let bc = [];
if (ac >= 10 && ac < 1000) {
  while (ac < 1000) {
    bc.push((ac += 7));
  }
  console.log(bc.slice(-2, -1));
} else {
  console.log("deyil");
}
// ------------------------------------------------------------------------------------
// 2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

let count = +prompt("How many count du yo want?");
let sentences = "«I know how to use cycles» ";
console.log(sentences.repeat(count));

// ------------------------------------------------------------------------------------
// 3. Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

let sum = 0;
for (i = 11; i < 100; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}
console.log(sum);

// ------------------------------------------------------------------------------------
// 4.Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin
// cəminə bərabər olduğunu yoxlayan isLucky(123321) funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.

isLucky("123344");
function isLucky(num) {
  let sum = 0;
  for (let i = 0; i > num.length / 2; i++) {
    sum += Number(num[i]);
  }
  const sum1 = isLucky2(num);
  if (sum === sum1) {
    console.log("lucky");
  } else {
    console.log("unlucky");
  }
}
function isLucky2(num) {
  let sum1 = 0;
  for (let i = 3; i > num.length; i++) {
    sum1 += Number(num[i]);
  }
  return sum1;
}

// ------------------------------------------------------------------------------------
// 5.İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin.
// Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın. İstifadəçi səhv formatda
// dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.
function getDate(date) {
  const split = date.split(".");
  const year = split[0];
  const month = split[1];
  const day = split[2];
  if (
    date.length > 10 ||
    year.length > 4 ||
    month.length != 2 ||
    month > 12 ||
    day > 31
  ) {
    return "Wrong value defined";
  } else {
    switch (month) {
      case "01":
        return `${day} yanvar ${year}-ci il`;
      case "02":
        return `${day} fevral ${year}-ci il`;
      case "03":
        return `${day} mart ${year}-ci il`;
      case "04":
        return `${day} aprel ${year}-ci il`;
      case "05":
        return `${day} may ${year}-ci il`;
      case "06":
        return `${day} iyun ${year}-ci il`;
      case "07":
        return `${day} iyul ${year}-ci il`;
      case "08":
        return `${day} avqust ${year}-ci il`;
      case "09":
        return `${day} sentyabr ${year}-ci il`;
      case "10":
        return `${day} oktaybr ${year}-ci il`;
      case "11":
        return `${day} noyabr ${year}-ci il`;
      case "12":
        return `${day} dekabr ${year}-ci il`;
    }
  }
}
const date = prompt("Tarixi «YYYY.MM.DD» formatında daxil edin");
console.log(getDate(date));

// ------------------------------------------------------------------------------------
// 6.İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və onu mətn şəklində
//  konsola çıxaran numberToText funksiyası tərtib edin.

// --Empty--

// ------------------------------------------------------------------------------------
// 7.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını
// konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,
let fullName = "Polat Alemdar";
let splitFullname = fullName.split(" ");
let changeFullname = splitFullname[1] + " " + splitFullname[0];
console.log(changeFullname);
// ------------------------------------------------------------------------------------
// 8.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
//  Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
const isValidNumber = (number) => {
  if (number.length == 13 && number.startsWith("+7")) {
    return true;
  } else {
    return false;
  }
};
const num = prompt("Write a telephone number:");
console.log(isValidNumber(num));
// ------------------------------------------------------------------------------------
