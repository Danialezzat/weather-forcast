let cityName = document.querySelector('.inputValue');
let city = document.querySelector('.city')
document.querySelector('.btn');





function checkWeather(){
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName.value}&appid=2f2121a2f82858e7a801f4b136fae1e5`;
    fetch(apiUrl)
    .then(res => res.json())
/*  pushing data to their parts */
    .then(data => {
        city.innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed  + 'km/h';

/* changing the weather picture */

        if(data.weather[0].main == 'Clouds'){
            document.querySelector('.weather-icon').setAttribute("src","./images/cloudy.png")
        }else if(data.weather[0].main == 'Clear'){
            document.querySelector('.weather-icon').setAttribute("src","./images/sunny.png")
        }else if(data.weather[0].main == 'Rains'){
            document.querySelector('.weather-icon').setAttribute("src","./images/rainy.png")
        }else if(data.weather[0].main == 'Snows'){
            document.querySelector('.weather-icon').setAttribute("src","./images/snowy.png")
        };
    });

};

/* make the Enter key down work */
cityName.addEventListener('keydown',(event) => {
    if(event.key == "Enter"){
        checkWeather();
    };
});

