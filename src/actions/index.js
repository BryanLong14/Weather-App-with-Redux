import axios from "axios";

const API_KEY = "47bff78b69345314cfeca2d23df770cc";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Request", request);

  return {
    type: FETCH_WEATHER,
    // return the promise from axios as the payload below
    payload: request
  };
}
