import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fecthWeatherByCityName from './weather-api';

const weatherWrapperRef = document.querySelector('.weather-wrapper');
const audioRef = document.querySelector('.cool-audio');
const startBtnRef = document.querySelector('.btn-primary');

startBtnRef.addEventListener('click', () => {
  Confirm.prompt(
    'Search',
    'Choose the city',
    '',
    'Search',
    'Cancel',
    clientAnswer => {
      if (!clientAnswer) {
        return Report.failure(
          'Search failed',
          'Try to type in the correct name of the city',
          'Okay'
        );
      }
      Block.hourglass('.main-wrapper', 'Wait', {
        position: 'absolute',
      });
      fecthWeatherByCityName(clientAnswer)
        .then(data => {
          if (data.cod === '404') {
            Report.failure(
              'Search failed',
              'Try to type in the correct name of the city',
              'Okay'
            );
          }
          Block.remove('.main-wrapper');
          renderWeatherMarkup(data);
          Notify.success('Here is your weather information', {
            position: 'center-bottom',
          });
          audioRef.play();
        })
        .catch(() => {});
    },
    () => {
      Report.failure(
        'Search failed',
        'Try to type in the correct name of the city',
        'Okay'
      );
    }
  );
});

function renderWeatherMarkup({ weather, main, wind, sys, name }) {
  const markup = `
<div class="card">
  <div class="card-body">
  <div class="weather-icon-wrapper">
  <img class="weather-icon" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather icon"/>
  </div>
     <h5>${name}</h5>
      <p class="card-text">
        The weather in ${name} describes like ${
    weather[0].main
  }, specifically like ${weather[0].description}
       </p>
  </div>
   <ul class="list-group list-group-flush">
    <li class="list-group-item">Temperature: ${convertKelToCel(main.temp)}</li>
    <li class="list-group-item">Max temperature: ${convertKelToCel(
      main.temp_max
    )}</li>
  <li class="list-group-item">Min temperature: ${convertKelToCel(
    main.temp_min
  )}</li>
    <li class="list-group-item">Wind speed: ${wind.speed}</li> 
    <li class="list-group-item">Pressure: ${main.pressure}</li>
    <li class="list-group-item">Sunrise: ${convertSecondsToTime(
      sys.sunrise
    )}</li> 
    <li class="list-group-item">Sunset: ${convertSecondsToTime(
      sys.sunset
    )}</li> 
  </ul>
  </div>
  `;

  weatherWrapperRef.insertAdjacentHTML('afterbegin', markup);
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
