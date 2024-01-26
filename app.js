const search = document.querySelector(".search");
const weathers = document.querySelector(".weather");
const details = document.querySelector(".details");
const icon = document.querySelector("#icon");
//

const updateUI = (weather) => {
  console.log(weather);

  weathers.innerHTML = `
  <img id="icon" src="https://openweathermap.org/img/wn/${
    weather.weather[0].icon
  }@2x.png" alt="" />
     <div class="details">
          <h2 class="temp">${Math.round(weather.main.temp)}.C</h2>
          <h1 class="city">${weather.sys.country}, ${weather.name}</h1>
        </div>
  `;
  if (weathers.classList.contains("d-none")) {
    weathers.classList.remove("d-none");
  }
};

//

const getWeather = async (city) => {
  const data = await getData(city);

  return data;
};

//
search.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityname = search.city.value.trim();
  search.reset();
  getWeather(cityname).then((data) => updateUI(data));
});

// const apiKey = "797998a7ce0f3895779eaea794429612";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=797998a7ce0f3895779eaea794429612&units=matric&q=bangalore";

// async function checkweather() {
//   const response = await fetch(apiUrl + '&appid=${apiKey}');
//   var data = await response.json();

//   console.log(data);

//     city.innerHTML = data.name;

// }
// checkweather();
