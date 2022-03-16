import {getWeatherByCity} from "./weather_service.js";

const weatherDiv = document.getElementById('weather');

const inputSearch = document.getElementById('city');
const btnSearch = document.getElementById('btn_search');

getWeatherByCity("douai")
	.then(r => {
		weatherDiv.innerHTML = toHtml(r);
	});

function toHtml(w) {
	return `
        <h1><span>${w.city}</span> <img src="${w.weatherIcon}" alt=""></h1>
        <p>${w.weatherDescription}</p>
        <ul>
            <li>Min : <span>${w.temperatureMin} °C</span></li>
            <li>Actuel : <span>${w.temperature} °C</span></li>
            <li>Max : <span>${w.temperatureMax} °C</span></li>
        </ul>
        <p>Ressenti : <span>${w.temperatureRessenti} °C</span></p>
        <p>Humidité : ${w.humidite} %</p>
        <div class="wind">
            <p>Nord</p>
            <div>
                <p>Ouest</p>
                <p class="weather_deg" style="--degre: ${w.ventDegre}deg">${w.ventVitesse} km/h</p>
                <p>Est</p>
            </div>
            <p>Sud</p>
        </div>
        <div class="soleil">
            <p>&#9788; ${getTime(w.soleilLeve)}</p>
            <p>${getTime(w.soleilCouche)} &#9790;</p>
        </div>
    `;
}

function getTime(time) {
	const hour = ("0" + time.getHours()).slice(-2);
	const min = ("0" + time.getMinutes()).slice(-2);
	const sec = ("0" + time.getSeconds()).slice(-2);
	return `${hour}:${min}:${sec}`;
}
