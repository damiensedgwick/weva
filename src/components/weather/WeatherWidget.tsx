import { useState, useEffect } from "react";
import { useDebounce } from "hooks/useDebounce";
import { CityWeatherResponse } from "./types";
import styles from "./WeatherWidget.module.css";

interface Props {
  city: string;
}

export const WeatherWidget = ({ city }: Props) => {
  const [weather, setWeather] = useState<CityWeatherResponse | null>(null);
  const debouncedValue = useDebounce<string>(city, 750);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        debouncedValue ? debouncedValue : "Norwich"
      }&APPID=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => (data.cod === 200 ? setWeather(data) : setWeather(null)));
  }, [debouncedValue]);

  if (!weather) {
    return (
      <div className={styles.widget}>
        <p className={styles.warning}>City weather not found</p>
      </div>
    );
  }

  return (
    <div className={styles.widget}>
      <div className={styles.weather}>
        <p className={styles.temp}>
          {Math.round(weather.main.temp - 273.15)}°C
        </p>
        <div>
          <p className={styles.city}>{weather.name}</p>
          <p className={styles.description}>
            <small>{weather.weather[0].description}</small>
          </p>
        </div>
      </div>
      <img
        className={styles.icon}
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt="weather icon"
      />
    </div>
  );
};
