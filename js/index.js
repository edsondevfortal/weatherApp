const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const searchInput = document.querySelector(".search-box input");
  const weatherBox = document.querySelector(".weather-box");
  const weatherDetails = document.querySelector(".weather-details");
  const error404 = document.querySelector(".not-found");
  const image = document.querySelector(".weather-box img");
  const temperature = document.querySelector(".weather-box .temperature");
  const description = document.querySelector(".weather-box .description");
  const humidity = document.querySelector(".weather-details .humidity span");
  const wind = document.querySelector(".weather-details .wind span");

  const images = {
    Clear: "images/clear.png",
    Rain: "images/rain.png",
    Snow: "images/snow.png",
    Clouds: "images/cloud.png",
    Mist: "images/mist.png",
  };
  
  error404.style.display = "none";
  error404.classList.remove("fadeIn");

  image.src = images[data.weather[0].main] || "";
  temperature.innerHTML = `${data.main.temp}<span>°C</span>`;
  description.innerHTML = `${data.weather[0].description}`;
  humidity.innerHTML = `${data.main.humidity}%`;
  wind.innerHTML = `${data.wind.speed}Km/h`;

  weatherBox.style.display = "";
  weatherDetails.style.display = "";
  weatherBox.classList.add("fadeIn");
  weatherDetails.classList.add("fadeIn");
  container.style.height = "590px";
});
