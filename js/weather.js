const weather = document.querySelector(".weather div:first-child");
const place = document.querySelector(".weather div:last-child");

const API_KEY = "9373e0fede63843563c3654687d3ae75";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = Math.floor(data.main.temp);
      const city = data.name;
      weather.innerText = `${temp}°C`;
      place.innerText = city;
    });
}

function onGeoError() {
  alert("I can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
