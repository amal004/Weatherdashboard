/* default selected city Toronto in select box, call the function 
to get weather data about Toronto when the entire page loads */
window.onload = function() {
    getData();
};

// uv Index box color
function setUVIndexColor(uvIndex) {
    if (uvIndex < 3) {
        return "green";
    } else if (uvIndex >= 3 && uvIndex <6) {
        return "yellow";
    } else if (uvIndex >= 6 && uvIndex <8) {
        return "orange";
    } else if (uvIndex >= 8 && uvIndex <11) {
        return "red";
    } else {
        return "purple";
    }
}

function getData(){
    // get user inut city
    var inputCity = document.getElementById("selectCity").value;

    // get weather data of selected city
    axios.get('http://localhost:8000/weather/')
    .then((response) => {
        var uvIndexColor;
        var data = response.data[inputCity];
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        document.getElementById("city").innerHTML = inputCity;
        document.getElementById("date").innerHTML =  " (" + month + "/" + day + "/" + year + ") ";
        document.getElementById("weather-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + data.icon + "@2x.png");
        document.getElementById("temperature").innerHTML = data.temperature + " &#176F";
        document.getElementById("humidity").innerHTML = data.humidity + "%";
        document.getElementById("wind-speed").innerHTML = data.wind_speed + " MPH";
        document.getElementById("uv-index").innerHTML = data.uv_index;

        uvIndexColor = setUVIndexColor(data.uv_index);
        document.getElementById("uv-index").setAttribute("style", `background-color:${uvIndexColor};`);
    })
    .catch((error) => {
        console.log(error);
    });

    // get 5 day forecast weather data of selected city
    axios.get('http://localhost:8000/forecast/')
    .then((response) => {
        var forecastData = response.data[inputCity];
        var uvIndexColors;
        const forecastDate = new Date();
        const forecastday = forecastDate.getDate();
        const forecastmonth = forecastDate.getMonth() + 1;
        const forecastyear = forecastDate.getFullYear();

        // Display 5 day forecast in DOM elements
        for (let i = 1; i <= 5; i++) {   
            document.querySelector(`.day-${i} .fiveDay-date`).innerHTML = forecastmonth + "/" + (forecastday + i) + "/" + forecastyear;
            document.querySelector(`.day-${i} .fiveDay-img`).setAttribute("src", "https://openweathermap.org/img/wn/" + forecastData[i-1].icon + "@2x.png");
            document.querySelector(`.day-${i} .fiveDay-temp`).innerHTML = forecastData[i-1].temperature + " &#176F";
            document.querySelector(`.day-${i} .fiveDay-humid`).innerHTML = forecastData[i-1].humidity + "%";
            document.querySelector(`.day-${i} .fiveDay-wind`).innerHTML = forecastData[i-1].wind_speed + " MPH";
            document.querySelector(`.day-${i} .fiveDay-uv`).innerHTML = forecastData[i-1].uv_index;
            uvIndexColors = setUVIndexColor(forecastData[i-1].uv_index);
            document.querySelector(`.day-${i} .fiveDay-uv`).setAttribute("style", `background-color:${uvIndexColors};`);
        }
    })
    .catch((error) => {
      console.log(error);
    });
}
