import axios from 'axios';

const API_KEY = 'aaf19e00321e94c9520ef14bc3b8e131';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Action type constants
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action Creators
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
