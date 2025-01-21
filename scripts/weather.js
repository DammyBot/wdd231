const temp = document.querySelector("#current-temp");
const img = document.querySelector("#weather-icon");
const description = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=15b3c845efce804c56e0ccf9cfedc22f&units=imperial'

// 49.75316816138699, 6.632781345457789
let data = null;
async function apiFetch (url) {
    try {
        const response = await fetch(url);
        if(response.ok){
            data = await response.json();
            console.log(data);
            displayResult(data);
        }else {
            throw Error(await response.text())
        }
    }
    catch(e) {
        console.error(e);
    }
}

function displayResult (data){
    temp.innerHTML = `${data.main.temp}&deg;C`;
    const imgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description
    img.setAttribute("src",imgSrc);
    img.setAttribute("alt", desc);
    description.textContent = desc;
}

apiFetch(url);