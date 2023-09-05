// repeatedSymbolCounter('ALIONALI', 'A') // return 2 -> must be done with for loop!!!!
let nickName = 'ALIONALI';

console.log(nickName[0].repeat(2));
// ------------------------------------------------------------------------------------
// capitalize(str) -> alion -=> Alion

let str = 'alion'

console.log(str[0].toUpperCase() + str.slice(1,str.length));
// ------------------------------------------------------------------------------------
// snakeToKebab(str) -=> SNAKE_CASE to kebab-case -=> BU_TEST_UCUNDUR -> bu-test-ucundur

let  snakeToKebab = 'BU_TEST_UCUNDUR'
console.log(snakeToKebab.toLowerCase().split('_').join("-"));
// ------------------------------------------------------------------------------------
// nameFormat(str) —> Alion GreenHeart-=> Alion G.

let nameFormat = 'Alion GreenHeart'
let dot= "."
console.log(nameFormat.slice(0,7)+ dot);

// ------------------------------------------------------------------------------------

// Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('alion', "A") // Alion

function changeFirstLetter(word, firstLetter){
    let result= word.charAt(0).replace("a", firstLetter)+word.slice(1, word.length)
    return result
}
console.log(changeFirstLetter('alion', "A"));
// ------------------------------------------------------------------------------------
// 1. Write a JavaScript function to split a sentence (JS funksiyasi yazin,
//      cumle verilir, cumledeki sozleri ayirsin). 

let sentence= " How many lives do we live? How many times do we die? They say we all lose 21 grams... at the exact moment of our death. Everyone. And how much fits into 21 grams? How much is lost? When do we lose 21 grams? How much goes with them? How much is gained? How much is gained?"
function separateSentence(sentence){
    let result= sentence.split(" ")
    return result
}
console.log(separateSentence(sentence));
// ------------------------------------------------------------------------------------
// 2. Write a JavaScript function to split a sentence (JS funksiyasi yazin, 
// (Alion GreenHeart -> Alion G.) 

let str2 = 'Alion GreenHeart';

function splitSentence(str2) {
    let name= str.replace(str.slice(6, str.length), "G.");
    return name;
}
console.log(splitSentence(str));

// ------------------------------------------------------------------------------------
// 3. removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin,
//  sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi. 

let name= "Alion"
function removeCharacterFromString(name, firstLetter){
     let result= name.replace(firstLetter, " ")
    return result
}
console.log(removeCharacterFromString("Alion","A"));

// ------------------------------------------------------------------------------------
// 4. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir,
//  ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

let gmail= prompt("Write your email adress:")
function verifyGmail(gmail){
    if(gmail.endsWith('@gmail.com') && gmail.length===15){
    return true
    } else{
        return false
    }
}
console.log(verifyGmail(gmail));
// ------------------------------------------------------------------------------------
//                              TO BE CONTUNED
// ------------------------------------------------------------------------------------

// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli 
// olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

// ------------------------------------------------------------------------------------
// 2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

// ------------------------------------------------------------------------------------
// 3. Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

// ------------------------------------------------------------------------------------
// 4.Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin
// cəminə bərabər olduğunu yoxlayan isLucky(123321) funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.

// ------------------------------------------------------------------------------------
// 5.İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin. 
// Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın. İstifadəçi səhv formatda 
// dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.


// ------------------------------------------------------------------------------------
// 6.İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və onu mətn şəklində
//  konsola çıxaran numberToText funksiyası tərtib edin.

// ------------------------------------------------------------------------------------
// 7.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını 
// konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// ------------------------------------------------------------------------------------
// 8.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
//  Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.

// ------------------------------------------------------------------------------------