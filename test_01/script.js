async function getWeather() {
    try {
        const result1 = await fetch("https://get.geojs.io/v1/ip/geo.json");
        if (!result1.ok) {
            throw new Error("Ошибка получения местоположения");
        }
        const dataOfLocation = await result1.json();
        
        console.log('Данные местоположения:', dataOfLocation);
        
        const city = dataOfLocation.city || 'Berlin';
        
        const apiKey = '75019c2ac08b4ab09de82230241610';
        const weatherEndpoint = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        const result2 = await fetch(weatherEndpoint);
        if (!result2.ok) {
            throw new Error("Ошибка получения данных о погоде");
        }
        const weatherData = await result2.json();
        
        updateWeatherUI(weatherData);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
  }
  
  
  function updateWeatherUI(weatherData) {
    if (weatherData && weatherData.location) {
      document.querySelector('.city-text').innerText = `${weatherData.location.name}, ${weatherData.location.region}`;
      document.getElementById('weather').innerText = weatherData.current.condition.text;
      document.querySelector('.temperature-now-text').innerText = `${weatherData.current.temp_c}°`;
      document.querySelector('.icon-big img').src = weatherData.current.condition.icon;
    } else {
      console.error('Ошибка: некорректные данные о погоде', weatherData);
    }
  }
  
  // Инициализация при загрузке страницы
  window.addEventListener('load', getWeather);