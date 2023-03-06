const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  }
  
  const searchInputBox = document.getElementById('input-box');
  
  // Event Listener Function on keypress
  searchInputBox.addEventListener('keypress', (event) => {
      
      if(event.keyCode == 13) {
          console.log(searchInputBox.value);
          getWeatherReport(searchInputBox.value);
          document.querySelector('.weather-body').style.display = "block";
      }
  }
  );
  
  // Get Weather Report
  function getWeatherReport(city) {
      fetch(`${weatherApi.baseUrl}?q=${city},VN&appid=${weatherApi.key}&units=metric`)
      .then(weather => {
          return weather.json(); })
      .then(showWeatherReport)
      .catch(error => {
        console.log(error);
        alert('City not found. Please enter a valid city name.');
      });
  }


// Show Weather Report //Sini kalau nk letak text
function showWeatherReport(weather){
    console.log(weather);

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `Sky condition: ${weather.weather[0].main}`;

    let windSpeed = document.getElementById('wind-speed');
    windSpeed.innerText = `Wind speed: ${weather.wind.speed} m/s`;

    let humidity = document.getElementById('humidity');
    humidity.innerText = `Humidity: ${weather.main.humidity}%`;

    let precipitation = document.getElementById('precipitation');
    let precipChance = weather.clouds.all;
    precipitation.innerText = `Precipitation: ${precipChance}%`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    // Change background based on weather conditions
    const body = document.querySelector('body');
    if (weather.weather[0].main === 'Rain') {
      body.style.backgroundImage = 'url("https://wallpaperaccess.com/full/664518.jpg")';
    } else if (weather.weather[0].main === 'Clouds') {
      body.style.backgroundImage = 'url("https://wallpaperaccess.com/full/3197976.jpg")';
    } else if (weather.weather[0].main === 'Clear') {
      body.style.backgroundImage = 'url("https://images.freeimages.com/images/large-previews/e79/clouds-on-a-beautiful-day-2-1191437.jpg")';
    } else if (weather.weather[0].main === 'Snow') {
      body.style.backgroundImage = 'url("https://wallpaperaccess.com/full/820250.jpg")';
    } else if (weather.weather[0].main === 'Thunderstorm') {
      body.style.backgroundImage = 'url("https://wallpapercrafter.com/desktop1/645663-bonita-springs-united-states-florida-storms-electric.jpg")';
    } else {
      body.style.backgroundImage = 'url("default.jpg")';
    }
}


// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
