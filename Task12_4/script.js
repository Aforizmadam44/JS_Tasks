// get random task adli button yaradin. Ona clickleyende
// https://catfact.ninja/fact apisinden pishikler
//  haqqinda random fact getirib, ikinci hisseye yazdirmalisiniz.
const getRandomTask = document.getElementById("getRandomTask");
const catFactInput = document.getElementById("cat-fact");
const root = document.getElementById("root");

getRandomTask.addEventListener("click", async () => {
  async function getRandomTask() {
    try {
      const url = "https://catfact.ninja/fact";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      catFactInput.innerHTML = `<p>${data.fact}</p>`;
    } catch {
      console.error("Datas didnt get:", error);
      root.innerHTML = "Datas didnt get.";
    }
  }
  getRandomTask();
});
