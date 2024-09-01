import { useState } from 'react'
import SearchBar from './assets/components/SearchBar'
import WeatherCard from './assets/components/WeatherCard'

import './App.css'


const apiKey = "89638d41ac4d76e85c0eca18872b79bb";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
// These are free apis so they can be kept here

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState('')
  const [error, setError] = useState('')

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      if (response.status === 404) {
        setError('Invalid City Name...');
        setWeatherData([]);
        setCityName('');
      } else {
        const data = await response.json();
        setWeatherData(data.list.filter((item, index) => index % 8 === 0));
        setCityName(`${data.city.name} 5 Day Weather Report`);
        setError('');
      }
    } catch (error) {
      setError('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <SearchBar onSearch={fetchWeather} />
      </div>
      {error && <div className="error">{error}</div>}
      {cityName && <div className="city-name">{cityName}</div>}
      <div className="bottom-container">
        <div className="weather-cards">
          {weatherData.map((day, index) => (
            <WeatherCard key={index} day={day} />
          ))}
        </div>
      </div>
    </div>
  );




}

export default App
