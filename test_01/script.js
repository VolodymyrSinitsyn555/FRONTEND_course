const locationElement = document.querySelector(".city-text");
const conditionOfWeather = document.querySelector("#weather");
const mainIcon = document.querySelector("#main-icon");
const temperatureNowText = document.querySelector(".temperature-now-text");
const temperatureMaxText = document.getElementById(`temperature-max-text`);
const temperatureMinText = document.getElementById(`temperature-min-text`);
const today = document.getElementById(`today`);

const weekDayElements = document.querySelectorAll(".text-weekDay");
const temperatureMaxElements = document.querySelectorAll(
  ".temperature-max-text"
);
const temperatureMinElements = document.querySelectorAll(
  "#temperature-min-text"
);

async function getWeather() {
  try {
    const result1 = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const dataOfLocation = await result1.json();

    const cor1 = dataOfLocation.latitude;
    const cor2 = dataOfLocation.longitude;

    const apiKey = "78d3eafcf12b461a868142819241610";
    const result2 = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cor1},${cor2}&aqi=no`
    );
    const weatherData = await result2.json();

    const result3 = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cor1},${cor2}&days=7&aqi=no&alerts=no`
    );
    const data = await result3.json();

    const forecastDays = data.forecast.forecastday;

    // Обновляем названия дней недели
    forecastDays.forEach((day, index) => {
      if (weekDay[index]) {
        let forecastDate = new Date(day.date); // Создаем объект Date из строки даты
        let dayOfWeek = getLocalizedWeekDayName(forecastDate, "en").slice(0, 2);
        weekDay[index].innerText = dayOfWeek;
      }
    });

    // Обновляем текущую информацию о погоде
    locationElement.innerText = `${weatherData.location.name}, ${weatherData.location.country}`;
    conditionOfWeather.innerText = weatherData.current.condition.text;
    temperatureNowText.innerText = `${Math.round(weatherData.current.temp_c)}°`;
    mainIcon.src = `https:${weatherData.current.condition.icon}`; // Добавляем префикс, так как иконка может быть с относительным путем

    // Обновляем дату для "сегодня"
    const date = new Date();
    today.innerText = `${getLocalizedWeekDayName(
      date,
      "en"
    )}, ${getLocalizedMonthName(date, "en")} ${date.getDate()}`;
  } catch (error) {
    console.error("Ошибка получения данных о погоде:", error);
  }
}

getWeather();

function getLocalizedMonthName(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
  }).format(date);
}

function getLocalizedWeekDayName(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
  }).format(date);
}
