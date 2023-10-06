// const root = document.getElementById("root");

// async function getData() {
//   const url = "https://api.github.com/users/Ali-GreenHeart";

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     const username = data.login;
//     const id = data.id;
//     const avatar = data.avatar_url;

//     root.innerHTML = `
//       <h2>Id:${id} <br>Username:${username}</h2>
//       <img src="${avatar}"></img>
//     `;
//   } catch (error) {
//     console.error("Datas are not available", error);
//     root.innerHTML = "Datas are not available";
//   }
// }
// getData();

//----------------------------------------------------------------
