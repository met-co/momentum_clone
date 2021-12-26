const API_KEY = `8b74e4eae882b8a5228d7fcfdab7d9a9`;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`lat ${lat}`);
  console.log(`lng ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      const status = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.main.temp}°C`;
      status.innerText = `${data.weather[0].main}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
