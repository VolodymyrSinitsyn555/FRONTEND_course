const locationElement = document.querySelector(".city-text");
const conditionOfWeather = document.querySelector("#weather");
const mainIcon = document.querySelector("#main-icon");
const temperatureNowText = document.querySelector(".temperature-now-text");
const temperatureMaxText = document.getElementById(`temperature-max-text`);
const temperatureMinText = document.getElementById(`temperature-min-text`);
const today = document.getElementById(`today`);

const weekDay = document.querySelectorAll(".text-weekDay");
const temperatureMax = document.querySelectorAll(".temperature-max-text");
const temperatureMin = document.querySelectorAll("#temperature-min-text");

// --------- Текущий прогноз погоды

async function getWeather() {
  const result1 = await fetch("https://get.geojs.io/v1/ip/geo.json");

  const dataOfLocation = await result1.json();

  const cor1 = dataOfLocation.latitude;
  const cor2 = dataOfLocation.longitude;

  const result2 = await fetch(`https://api.weatherapi.com/v1/current.json?key=78d3eafcf12b461a868142819241610&q=${
    cor1 + "," + cor2
  }&aqi=no
`

  );
  const weatherData = await result2.json();

  locationElement.innerText = `${weatherData.location.name}, ${weatherData.country_code}`;
  conditionOfWeather.innerText = weatherData.current.condition.text;
  temperatureNowText.innerText = `${Math.round(weatherData.current.temp_c)}°`;
  mainIcon.src = weatherData.current.condition.icon;
  today.innerText = `${getLocalizedWeekDayName(
    date,
    `en`
  )}, ${getLocalizedMonthName(date, `en`)} ${date.getDate()}`;

  // ----------- Прогноз погоды на неделю

  const result3 = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=78d3eafcf12b461a868142819241610&q=${
      cor1 + "," + cor2
    }&days=7&aqi=no&alerts=no`
  );

  const data = await result3.json();
  const forecastDays = data.forecast.forecastday;

  forecastDays.forEach((currentDay, index) => {
    if (weekDay[index]) {
      let forecastDate = new Date(currentDay.date);
      let dayOfWeek = getLocalizedWeekDayName(forecastDate, "en").slice(0, 3);
      weekDay[index].innerText = dayOfWeek;
    }

    if (temperatureMax[index]) {
      temperatureMax[index].innerText = `${Math.round(
        currentDay.day.maxtemp_c
      )}°`;
    }
    if (temperatureMin[index]) {
      temperatureMin[index].innerText = `${Math.round(
        currentDay.day.mintemp_c
      )}°`;
    }
  });
}

getWeather();

function getLocalizedMonthName(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    month: `long`,
  }).format(date);
}
function getLocalizedWeekDayName(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    weekday: `long`,
  }).format(date);
}
const date = new Date();
