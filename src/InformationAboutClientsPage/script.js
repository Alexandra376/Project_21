// // import {resultArr} from "../DataInputPage/script.js"
// const container = document.getElementById("container");
//
// const getData = async () => {
//     const response = await fetch("https://alexandra376.github.io/Project_21/Api/data.json");
//     const data = await response.json();
//     // console.log(resultArr);
//     data.forEach(item => {
//         const card = document.createElement("div");
//         card.className = "card";
//         container.append(card);
//
//         let newName = document.createElement("p");
//         newName.textContent = item.name;
//         let newPicture = document.createElement("img");
//         newPicture.src = item.picture;
//         let newGender = document.createElement("p");
//         newGender.textContent = item.gender;
//
//         card.append(newName, newPicture, newGender);
//     });
// }
//
// getData();
