// src/components/WeatherCard.jsx
import React from 'react';

function WeatherCard({ day }) {
  const date = new Date(day.dt_txt);
  const dayName = date.toLocaleDateString(undefined, { weekday: 'long' });
  const celsius = Math.round(day.main.temp - 273.15);
  const fahrenheit = Math.round((celsius * 9 / 5) + 32);

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'Clouds':
        return 'clouds';
      case 'Clear':
        return 'clear';
      case 'Rain':
        return 'rain';
      case 'Drizzle':
        return 'drizzle';
      case 'Mist':
        return 'mist';
      default:
        return 'clear';
    }
  };

  return (
    <div className="card">
      <img src={`/images/${getWeatherIcon(day.weather[0].main)}.png`} alt="Weather Icon" />
      <h1>{dayName}</h1>
      <p>{celsius}°C / {fahrenheit}°F</p>
      <p>{day.weather[0].description}</p>
      <p>Humidity: {day.main.humidity}%</p>
      <p>Wind: {day.wind.speed} km/h</p>
    </div>
  );
}

export default WeatherCard;
