import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { WeatherWidgetProps, CityWeatherResponse } from "../../types";

export const WeatherWidget = ({ city }: WeatherWidgetProps) => {
  const [weather, setWeather] = useState<CityWeatherResponse | null>(null);
  const debouncedValue = useDebounce<string>(city, 750);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${debouncedValue}&APPID=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => (data.cod === 200 ? setWeather(data) : setWeather(null)));
  }, [debouncedValue]);

  return (
    <div>
      {!weather && (
        <div>
          <p>Please enter a city</p>
        </div>
      )}

      {weather && (
        <div>
          <div>
            <p>{weather.name}</p>
            <p>{weather.weather[0].description}</p>
            <p>{Math.round(weather.main.temp - 273.15)}°C</p>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="weather icon"
            />
          </div>
        </div>
      )}
    </div>
  );
};
