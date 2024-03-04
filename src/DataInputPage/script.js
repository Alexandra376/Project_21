// const form = document.getElementById("form");
// const input = document.getElementById("input");
// const loader = document.getElementById("loader");
//
// export const resultArr = [];
//
// function getData(selectName) {
//     fetch(`https://api.genderize.io?name=${selectName}`)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             loader.style.display = "none"
//             resultArr.push(data);
//             return data
//         })
// }
// input.addEventListener("change", e => {
//     let selectName = e.target.value;
//     getData(selectName)
// });
//
// form.addEventListener("submit", e => {
//     e.preventDefault();
//     loader.style.display = "inline-block";
//     window.location.replace('../InformationAboutClientsPage/index.html')
// });