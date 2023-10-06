// 1. ali-nin datalarini ekrana cixar (shekili, repo sayi, follower sayi, following sayi...)

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
//         <h2>Id:${id}<br><br> Username:${username}</h2>
//         <img src="${avatar}">
//       `;
//   } catch (error) {
//     console.error("Datas are not available", error);
//     root.innerHTML = "Datas are not available";
//   }
// }

// getData();

//----------------------------------------------------------------

// 2. follower-larinin adlarini ve shekillerini ekrana cixar.

// const root = document.getElementById("root");
// async function followerData() {
//   const url = "https://api.github.com/users/Ali-GreenHeart/followers";
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     data.forEach((element) => {
//       root.innerHTML += `<h2> Follower name is: ${element.login}</h2> <br>
//       <img src="${element.avatar_url}"> `;
//     });
//   } catch (error) {
//     console.error("Datas are not available", error);
//     root.innerHTML = "Datas are not available";
//   }
// }
// followerData();
// ----------------------------------------------------------------

// 3. 10 eded repo adlarini ekrana cixar.

// const root = document.getElementById("root");
// async function reposName() {
//   const url = "https://api.github.com/users/Ali-GreenHeart/repos?_limit=10";
//   try {
//     const response = await fetch(url);
//     const repoNames = await response.json();
//     repoNames.forEach((element) => {
//       root.innerHTML += `<h2>Repos name:${element.name}</h2>`;
//     });
//   } catch {}
// }
// reposName();
