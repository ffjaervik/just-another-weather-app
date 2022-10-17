import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city && country) {
      setLoading(true);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setWeather(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        })
    }
  }, [city, country]);


  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="weather">
        <div className="weather__form">
          <input type="text" placeholder="City" onChange={e => setCity(e.target.value)} />
          <input type="text" placeholder="Country" onChange={e => setCountry(e.target.value)} />
        </div>
        {loading && <p>Loading...</p>}
        {weather && (
          <div className="weather__data">
            <p>{weather.name}, {weather.sys.country}</p>
            <p>{weather.weather[0].main}</p>
            <p>{weather.main.temp}°F</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
