const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'ed75ccbaa36376d6c7d9a8196e9f5b6a';

export default function fecthWeatherByCityName(cityName) {
  return fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}`).then(r =>
    r.json()
  );
}
