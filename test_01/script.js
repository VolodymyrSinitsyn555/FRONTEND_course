const locationElement = document.querySelector('.city-text');
const wetherText = document.querySelector('#weather');
const iconElement = document.querySelector('#icon');
const todayDate = document.querySelector('#today');
const temperatureNowText = document.querySelector(".temperature-now-text");
const temperatureMaxText = document.querySelector(`.temperature-max-text`);
const temperatureMinText = document.querySelector(`.temperature-min-text`);
const temperatureMax = document.querySelectorAll(".temperature-max-text");
const temperatureMin = document.querySelectorAll(".temperature-min-text");
const weekDay = document.querySelectorAll(".text-weekDay");


async function getWeather() {
    const res1 = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const dataOflocation = await res1.json();
    const city = dataOflocation.city

    const apiKey = '664f9282e14a40e1b9082353241610';
    const res2 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`);
    const dataOfWeather = await res2.json();
    locationElement.textContent = `${dataOfWeather.location.name}, ${dataOflocation.country_code}`;
    temperatureNowText.textContent = `${Math.round(dataOfWeather.current.temp_c)} °C`;
    wetherText.textContent = dataOfWeather.current.condition.text;
    const iconURL = dataOfWeather.current.condition.icon;
    iconElement.src = iconURL;
    const forecastDays = dataOfWeather.forecast.forecastday;

    forecastDays.forEach((day, index) => {
        if (weekDay[index]) {
            let forecastDate = new Date(day.date);
            let dayOfWeek = getLocalizedWeekDayName(forecastDate, "de").slice(0, 3);
            weekDay[index].innerText = dayOfWeek;
        }

        if (temperatureMax[index]) {
            temperatureMax[index].innerText = `${Math.round(
                day.day.maxtemp_c
            )}°`;
        }
        if (temperatureMin[index]) {
            temperatureMin[index].innerText = `${Math.round(
                day.day.mintemp_c
            )}°`;
        }
    });
}

function getLocalizedMonthName(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        month: 'long',
    }).format(date);
}
function getLocalizedWeekDayName(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        weekday: 'short',
    }).format(date);
}
const date = new Date();

todayDate.textContent = `${getLocalizedWeekDayName(date, 'de')}, ${getLocalizedMonthName(date, 'de')} ${date.getDate()}`

getWeather();