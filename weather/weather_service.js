import {WeatherModel} from "./weather_model.js";

async function getWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather/?appid=00f5c3ea7e9311dcaf0c0de897590f90&q=${city}&units=metric&lang=fr`;
    const response = await fetch(url);
    const result = await response.json();
    // console.log(resultToWeatherModel(result));
    return resultToWeatherModel(result);
}

async function getWeatherByCoord(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather/?appid=00f5c3ea7e9311dcaf0c0de897590f90&lat=${lat}&lon=${lon}&units=metric&lang=fr`;
    const response = await fetch(url);
    const result = await response.json();
    // console.log(resultToWeatherModel(result));
    return resultToWeatherModel(result);
}

function resultToWeatherModel(res) {
    const weather = new WeatherModel();
    weather.city = res['name'];
    weather.weatherDescription = res['weather'][0]['description'];
    weather.weatherIcon = 'https://openweathermap.org/img/wn/' + res['weather'][0]['icon'] + '@2x.png';
    weather.temperature = res['main']['temp'];
    weather.temperatureMin = res['main']['temp_min'];
    weather.temperatureMax = res['main']['temp_max'];
    weather.temperatureRessenti = res['main']['feels_like'];
    weather.humidite = res['main']['humidity'];
    weather.ventVitesse = res['wind']['speed'];
    weather.ventDegre = res['wind']['deg'];
    weather.soleilLeve = new Date(res['sys']['sunrise'] * 1000);
    weather.soleilCouche = new Date(res['sys']['sunset'] * 1000);
    return weather;
}

export {getWeatherByCity, getWeatherByCoord};
