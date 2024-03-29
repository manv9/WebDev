const apiKey = "a0b7512d92582dd531225d6a1cb4d049";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + " %";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " KM/H";
        document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like) + "°C";
        document.querySelector(".visibility").innerHTML = Math.round(data.visibility) + " m";
        document.querySelector(".Min-Temp").innerHTML = Math.round(data.main.temp_min) + "°C";
        document.querySelector(".Max-Temp").innerHTML = Math.round(data.main.temp_max) + "°C";

    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

   
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

