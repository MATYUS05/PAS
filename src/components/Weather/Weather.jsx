import React, { useEffect, useState } from "react";
import axios from "axios";
import Awan from "../../gambar/awan2.png";
import "./Weather.css";

// Komponen untuk menampilkan data cuaca dalam sebuah kotak
const WeatherBox = ({ value }) => (
  <div className="weather-box">
    <p>{value}</p>
  </div>
);

export default function Weather() {
  const [weather, setWeather] = useState(null);

  const options = {
    method: "GET",
    url: "https://yahoo-weather5.p.rapidapi.com/weather",
    params: {
      location: "jakarta",
      format: "json",
      u: "c",
    },
    headers: {
      'X-RapidAPI-Key': 'ccd6d7b0e5mshddb7a2f3c93c633p1d55e2jsncf89cc04ea61',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    },
  };

  async function fetchWeather() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="container-weather">
      {weather ? (
        <div className="weather-card">
          <div className="city-name">{weather.location.city}</div>
          <div className="image">
            <img src={Awan} alt="Weather Icon" />
            <div className="temperature">
              {`${Math.round(
                weather.current_observation.condition.temperature
              )}°C`}
            </div>
          </div>
          <div className="weather-details">
            <WeatherBox value={weather.current_observation.condition.text} />
            <div className="weather-speed">
              <WeatherBox
                value={`${weather.current_observation.wind.speed} Kph`}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
