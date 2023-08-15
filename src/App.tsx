import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { CityWeatherResponse, WeatherWidgetProps } from "./types";

export const App = () => {
  const [city, setCity] = useState('London');

  return (
    <div className="content-wrapper">
      <CitySearch setCity={setCity} />
      <WeatherWidget city={city} />
    </div>
  )
}

interface CitySearchProps {
  setCity: (city: string) => void;
}

const CitySearch = ({ setCity }: CitySearchProps) => {
  return (
    <div className="city-search">
      <input
        type="text"
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  )
};

const WeatherWidget = ({ city }: WeatherWidgetProps) => {
  const [weather, setWeather] = useState<CityWeatherResponse | null>(null);
  const debouncedValue = useDebounce<string>(city, 500)

  console.log(weather)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${debouncedValue}&APPID=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`)
      .then((res) => res.json())
      .then((data) => data.cod === 200 ? setWeather(data) : setWeather(null));
  }, [debouncedValue]);

  return (
    <div className="weather-widget">
      {weather && (
        <div className="weather-widget__content">
          <div className="weather-widget__content__city">
            <p className="weather-widget__content__city__name">{weather.name}</p>
            <p className="weather-widget__content__city__description">{weather.weather[0].description}</p>
            <p className="weather-widget__content__city__temp">{Math.round(weather.main.temp - 273.15)}°C</p>
          </div>
          <div className="weather-widget__content__icon">
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
          </div>
        </div>
      )}

      {!weather && (
        <div className="weather-widget__content">
          <p className="weather-widget__content__city__name">City not found</p>
        </div>
      )}
    </div>
  )
};
