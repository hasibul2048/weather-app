const apiKey ="5a93bb3af2caf892e7007035fef5a60f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let userInp = document.querySelector(".srch");
let srchBtn = document.querySelector("button");
let weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + userInp.value + `&appid=${apiKey}`);
    var data = await response.json();

    // console.log(data);
    
    function showData(){
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°C" ;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    }

    function updateImage(){
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./images/clear.png";
        } else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./images/rain.png";
        }   else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./images/drizzle.png";
        } else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./images/mist.png";
        }
    }

    showData();
    updateImage();

}


srchBtn.addEventListener("click", ()=>{
    checkWeather(userInp.value);
})
