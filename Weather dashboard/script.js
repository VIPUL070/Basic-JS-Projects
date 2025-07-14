"use strict";

const apiKey = '7c22b29cc0f693faca036d2516ffc1ef';

function getWeather() {
  const userInput = document.getElementById('city-input');
  const city = userInput.value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        alert(`City not found: ${data.message}`);
        clearWeatherData(); // Clear previous data if needed
        return;
      }

      const tem = document.getElementById('temperature');
      const windSpeed = document.getElementById('wind-speed');
      const humidity = document.getElementById('humidity');
      const date = document.getElementById('date');
      const des = document.getElementById('description');
      let icon = document.getElementById('weather-icon')

      const currTemp = data.main.temp;
      const currSpeed = data.wind.speed;
      const currHumidity = data.main.humidity;
      const currDate = new Date().toLocaleDateString();
      const title = data.weather[0].description;
      let currIcon = data.weather[0].icon;

      tem.textContent = `${currTemp} °C`;
      windSpeed.textContent = `${currSpeed} km/h`;
      humidity.textContent = `${currHumidity} %`;
      date.textContent = `${currDate}`;
      icon.src = currIcon;
      des.textContent = `${title}`;
    })
    .catch((error) => {
      alert("Something went wrong. Please try again later.");
      console.log("ERROR OCCURRED", error);
    });
}

function clearWeatherData() {
  document.getElementById('temperature').textContent = "";
  document.getElementById('wind-speed').textContent = "";
  document.getElementById('humidity').textContent = "";
  document.getElementById('date').textContent = "";
  document.getElementById('description').textContent = "Description";
}

document.querySelector('.search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather();
});

