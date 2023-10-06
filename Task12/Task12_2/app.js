/Bu endpoint verilib. Azerbaycan haqqinda verilen datalari ekrana yazdirin

 (bayraq shekili, adi, paytaxti ve s.)
const root = document.getElementById("root");
async function aboutAzerbaijan() {
  const url = "https://restcountries.com/v3.1/name/azerbaijan";

  const response = await fetch(url);
  const aboutSection = await response.json();

  try {
    aboutSection.forEach((element) => {
      root.innerHTML = `<h2> ${element.name.common} <br>${element.capital}</h2>
      <br>
      <img src="${element.flags.png}">`;
    });
  } catch (error) {
    console.error("Datas are not available", error);
    root.innerHTML = "Datas are not available";
  }
}
aboutAzerbaijan();
