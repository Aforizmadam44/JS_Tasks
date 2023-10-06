// Bu endpoint verilib. Html-da input ve button duzeldin. Input-a olkenin adini yazim,
//  button-a clickleyende backend-e request getsin ve hemin olkeye uygun datalar gelsin.

const input = document.getElementById("input");
const button = document.getElementById("button");
const root = document.getElementById("root");

button.addEventListener("click", async () => {
  async function countryData() {
    try {
      const url = "https://restcountries.com/v3.1/name/";
      const changedUrl = `${url}${input.value}`;
      const response = await fetch(changedUrl);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const country = data[0].name.common;
        const capital = data[0].capital;
        const official = data[0].name.official;
        const region = data[0].region;
        const flags = data[0].flags.png;

        root.innerHTML = `<h2>Country name: ${country}</h2>
        <p>Capital is:${capital}</p> <p>Official is:${official}</p><p>Region is:${region}</p>
        <img src="${flags}">`;
      } else {
        root.innerHTML = "Country datas is not available.";
      }
    } catch (error) {
      console.error("Datas get error:", error);
      root.innerHTML = "Datas is not seen.";
    }
  }

  countryData();
});
