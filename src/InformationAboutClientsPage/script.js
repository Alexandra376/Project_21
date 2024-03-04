const container = document.getElementsByClassName("container");

const getData = async ()  => {
    const response = await fetch("https://alexandra376.github.io/Project_21/Api/data.json");
    const {data} = await response.json();
    data.map((name, gender, picture) => {
        
    })
}
getData();