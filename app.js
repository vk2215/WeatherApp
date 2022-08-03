//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
    key: "8eb24fd9cabd3235be0ac69a9638c6c9",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (event) => {

    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display ="block";
    }
});
//Event Listener Function on Keypress
//Get Weather Reports
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
    
    
}
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML= `${Math.floor(weather.main.temp_min)}&deg;C / ${Math.ceil(weather.main.temp_max)}&deg;C `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url(images/Clear.jpg)";

    }else if(weatherType.textContent == 'Clouds'){

        document.body.style.backgroundImage = "url(images/Cloudy.jpg)";
        }else if(weatherType.textContent == 'Sunny'){

        document.body.style.backgroundImage = "url(images/Sunny.jpg)";

    }else if(weatherType.textContent == 'Haze'){

        document.body.style.backgroundImage = "url(images/Haze.jpg)";

    }else if(weatherType.textContent == 'Rain'){

        document.body.style.backgroundImage = "url(images/Rainy.jpg)";

    }else if(weatherType.textContent == 'Snow'){

        document.body.style.backgroundImage = "url(images/snow.jpg)";

    }else if(weatherType.textContent == 'Thunderstorm'){

        document.body.style.backgroundImage = "url(thunderstorm.jpg)";
    }

}
//Date Manage
function dateManage(dateArg){
    let days =["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" ,"Saturday"];

    let months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();

    let month = months[dateArg.getMonth()];

    let date = dateArg.getDate();

    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year}`;
}





