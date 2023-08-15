import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { WeatherWidgetProps, CityWeatherResponse } from "../types";

export const WeatherWidget = ({ city }: WeatherWidgetProps) => {
  const [weather, setWeather] = useState<CityWeatherResponse | null>(null);
  const debouncedValue = useDebounce<string>(city, 750)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${debouncedValue}&APPID=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`)
      .then((res) => res.json())
      .then((data) => data.cod === 200 ? setWeather(data) : setWeather(null));
  }, [debouncedValue]);

  return (
    <div className="weather-widget">
      {!weather && (
        <div className="weather-widget__content">
          <p className="weather-widget__content__city__name">Please enter a city</p>
        </div>
      )}

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
    </div>
  )
};
