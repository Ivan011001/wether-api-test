import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';
import fecthWeatherByCityName from './weather-api';

const weatherFormRef = document.querySelector('form');
const weatherWrapperRef = document.querySelector('.weather-wrapper');
const weatherSearchRef = document.querySelector('.js-weather-serch');

weatherFormRef.addEventListener('submit', e => {
  e.preventDefault();

  fecthWeatherByCityName(weatherSearchRef.value)
    .then(renderWeatherMarkup)
    .catch(() => {});
});

function renderWeatherMarkup({ weather, main, wind, sys, name }) {
  const markup = `
      <p>City name: ${name}</p>
      <p>Weather type: ${weather[0].main}</p>
      <p>Weather description: ${weather[0].description}</p>
      <p>Wind speed: ${wind.speed}</p>
      <p>Temperature: ${convertKelToCel(main.temp)}</p>
      <p>Max temperature: ${convertKelToCel(main.temp_max)}</p>
      <p>Min temperature: ${convertKelToCel(main.temp_min)}</p>
      <p>Pressure: ${main.pressure}</p>
      <p>Sunrise: ${convertSecondsToTime(sys.sunrise)}</p>
      <p>Sunset: ${convertSecondsToTime(sys.sunset)}</p>
  `;
  weatherWrapperRef.innerHTML = markup;
}

function convertSecondsToTime(seconds) {
  const date = new Date(seconds * 1000);
  return `${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
}

function convertKelToCel(kel) {
  return (kel - 273.15).toFixed(2);
}
