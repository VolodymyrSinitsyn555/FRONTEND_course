const locationElement = document.querySelector(".city-text");
const conditionOfWeather = document.querySelector("#weather");
const mainIcon = document.querySelector("#main-icon");
const temperatureNowText = document.querySelector(".temperature-now-text");
const temperatureMaxText = document.getElementById(`temperature-max-text`);
const temperatureMinText = document.getElementById(`temperature-min-text`);
const today = document.getElementById(`today`);

async function getWeather() {
  const result1 = await fetch("https://get.geojs.io/v1/ip/geo.json");

  const dataOfLocation = await result1.json();

  console.log("Данные места:", dataOfLocation);

  const cor1 = dataOfLocation.latitude;
  const cor2 = dataOfLocation.longitude;

  const apiKey = "75019c2ac08b4ab09de82230241610";
  const result2 = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${
      cor1 + "," + cor2
    }&aqi=no`
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
}
console.log(today);

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
// console.log(getLocalizedWeekDayName(date, `en`));
