// This is the start of your backend server. We will write server side code here
const path = require('path');
//this is a node package that will help us create a server
const express = require("express");
const { kill } = require('process');

//this is the main app. Apps can get complicated. For now, think of it as a place to store your routes
const app = express()

// this is the port we are going to listen on. Backend programs listen on ports to get information from other computers
const PORT = 8000

// Create static path for express 
app.use(express.static(__dirname));

/**
 * This is a route. Routes help the computer understand what the user is trying to access.
 * 
 * For example, if the user makes a GET request to "/" (which we learn later is http://localhost:8000/),
 * the computer will run the function beside it. 
 */
app.get("", (req, res) => {
  res.sendFile("index.html")
})

app.get("/weather", (req, res) => {
  //`res` is an object with methods. The `json` method allows us to send information back to users in the form of json
  
  //don't worry about this, just a security thing to allow us to test without problems. If you are curious; CORS is the term to look up.
  res.setHeader("Access-Control-Allow-Origin", "*") 
  
  // database
  const weatherData = {
    "Toronto": 
      {
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "10d",
        "temperature": 69,
        "humidity": 44,
        "wind_speed": 13.6,
        "uv_index": 5.77
      }
    ,
    "Ottawa": 
      {
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d",
        "temperature": 76,
        "humidity": 43,
        "wind_speed": 9.63,
        "uv_index": 6.38
      }
    ,
    "Hamilton": 
      {
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d",
        "temperature": 51,
        "humidity": 70,
        "wind_speed": 10.4,
        "uv_index": 6.64
      }
    ,
    "Brampton": 
      {
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d",
        "temperature": 68,
        "humidity": 47,
        "wind_speed": 15.1,
        "uv_index": 5.76
      }
    ,
    "Mississauga": 
      {
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d",
        "temperature": 60,
        "humidity": 80,
        "wind_speed": 15.0,
        "uv_index": 7.24
      }
    
  };

  res.json(weatherData);
})

app.get("/forecast", (req, res) => {
  //`res` is an object with methods. The `json` method allows us to send information back to users in the form of json
  
  //don't worry about this, just a security thing to allow us to test without problems. If you are curious; CORS is the term to look up.
  res.setHeader("Access-Control-Allow-Origin", "*") 
  
  // database, data from openweathermap
  const forecastWeatherData = {
    "Toronto": [
      {
        "dt_txt": "Day 1",
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d",
        "temperature": 46,
        "humidity": 66,
        "wind_speed": 16.1,
        "uv_index": 7.21
      },
      {
        "dt_txt": "Day 2",
        "main": "Rain",
        "description": "light rain",
        "icon": "10d",
        "temperature": 39,
        "humidity": 84,
        "wind_speed": 17.8,
        "uv_index": 3.22
      },
      {
        "dt_txt": "Day 3",
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n",
        "temperature": 34,
        "humidity": 72,
        "wind_speed": 17.5,
        "uv_index": 3.16
      },
      {
        "dt_txt": "Day 4",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 44,
        "humidity": 71,
        "wind_speed": 15.7,
        "uv_index": 6.24
      },
      {
        "dt_txt": "Day 5",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 47,
        "humidity": 95,
        "wind_speed": 13.8,
        "uv_index": 3.16
      }
    ],
    "Ottawa": [
      {
        "dt_txt": "day 1",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 51,
        "humidity": 94,
        "wind_speed": 14.3,
        "uv_index": 7.12
      },
      {
        "dt_txt": "day 2",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 38,
        "humidity": 89,
        "wind_speed": 14.8,
        "uv_index": 1.54
      },
      {
        "dt_txt": "day 3",
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n",
        "temperature": 36,
        "humidity": 82,
        "wind_speed": 17.1,
        "uv_index": 2.53
      },
      {
        "dt_txt": "day 4",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 37,
        "humidity": 73,
        "wind_speed": 15.5,
        "uv_index": 2.55
      },
      {
        "dt_txt": "day 5",
        "main": "Rain",
        "description": "light rain",
        "icon": "10d",
        "temperature": 47,
        "humidity": 87,
        "wind_speed": 11.8,
        "uv_index": 4.54
      }
    ],
    "Hamilton": [
      {
        "dt_txt": "day 1",
        "main": "Rain",
        "description": "light rain",
        "icon": "10d",
        "temperature": 39,
        "humidity": 77,
        "wind_speed": 18.1,
        "uv_index": 6.54
      },
      {
        "dt_txt": "day 2",
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n",
        "temperature": 37,
        "humidity": 76,
        "wind_speed": 19.2,
        "uv_index": 2.23
      },
      {
        "dt_txt": "day 3",
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n",
        "temperature": 48,
        "humidity": 84,
        "wind_speed": 18.6,
        "uv_index": 2.52
      },
      {
        "dt_txt": "day 4",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 56,
        "humidity": 83,
        "wind_speed": 15.4,
        "uv_index": 5.34
      },
      {
        "dt_txt": "day 5",
        "main": "Rain",
        "description": "light rain",
        "icon": "10d",
        "temperature": 51,
        "humidity": 87,
        "wind_speed": 13.5,
        "uv_index": 4.37
      }
    ],
    "Brampton": [
      {
        "dt_txt": "day 1",
        "main": "Rain",
        "description": "light rain",
        "icon": "10d",
        "temperature": 44,
        "humidity": 59,
        "wind_speed": 17.5,
        "uv_index": 7.14
      },
      {
        "dt_txt": "day 2",
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n",
        "temperature": 36,
        "humidity": 80,
        "wind_speed": 18.1,
        "uv_index": 2.54
      },
      {
        "dt_txt": "day 3",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 35,
        "humidity": 69,
        "wind_speed": 19.3,
        "uv_index": 4.14
      },
      {
        "dt_txt": "day 4",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 44,
        "humidity": 87,
        "wind_speed": 16.7,
        "uv_index": 6.13
      },
      {
        "dt_txt": "day 5",
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d",
        "temperature": 46,
        "humidity": 72,
        "wind_speed": 14.5,
        "uv_index": 3.17
      }
    ],
    "Mississauga": [
      {
        "dt_txt": "day 1",
        "main": "Rain",
        "description": "light rain",
        "icon": "10d",
        "temperature": 59,
        "humidity": 62,
        "wind_speed": 18.9,
        "uv_index": 3.14
      },
      {
        "dt_txt": "day 2",
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n",
        "temperature": 60,
        "humidity": 62,
        "wind_speed": 18.12,
        "uv_index": 4.12
      },
      {
        "dt_txt": "day 3",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 61,
        "humidity": 62,
        "wind_speed": 12.3,
        "uv_index": 6.11
      },
      {
        "dt_txt": "day 4",
        "main": "Rain",
        "description": "light rain",
        "icon": "10n",
        "temperature": 62,
        "humidity": 62,
        "wind_speed": 8.12,
        "uv_index": 2.55
      },
      {
        "dt_txt": "day 5",
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d",
        "temperature": 63,
        "humidity": 62,
        "wind_speed": 11.2,
        "uv_index": 0.13
      }
    ]
  };

  res.json(forecastWeatherData);
})

/**
 * Remember how before I talked about listening on a port? We do that here. Our app "pauses" and waits for requests to come in.
 * 
 * These requests can be from browsers, other computers in the cloud, or even your fridge!
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)

})