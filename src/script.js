const form = document.getElementById("form");
const input = document.getElementById("input");
const loader = document.getElementById("loader");
const container = document.getElementById("container");

let resultArr = [];
let resultObj = {};
function getData(selectName) {
    fetch(`https://api.genderize.io?name=${selectName}`)
        .then((response) => response.json())
        .then((data) => {
            loader.style.display = "none"
            resultObj = { ...data };
            return data
        })
}

async function getDataRes() {
    const response = await fetch("https://alexandra376.github.io/Project_21/Api/data.json");
    const data = await response.json();

    resultArr.push(data)
    const container = document.getElementById("container");
    let newName = document.createElement("p");
    container && container.append(newName)

    document.addEventListener('DOMContentLoaded', (event) => {});
    return data.forEach(item => {
        if (item.gender === resultObj.gender) {
            if ( container ) {
                const card = document.createElement("div");
                card.className = "card";
                container.append(card);

                let newName = document.createElement("p");
                newName.textContent = item.name;
                let newPicture = document.createElement("img");
                newPicture.src = item.picture;
                let newGender = document.createElement("p");
                newGender.textContent = item.gender;

                card.append(newName, newPicture, newGender);
            }
        } else {
            console.log(2)
            return null
        }
    });
}

input && input.addEventListener("change", async e => {
    let selectName = e.target.value;
    await getData(selectName);
    await getDataRes()
});

form && form.addEventListener("submit",  e => {
    e.preventDefault();
    loader.style.display = "inline-block";
    window.location.replace('../InformationAboutClientsPage/index.html')
});

