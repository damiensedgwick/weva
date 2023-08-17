import { useCity } from "hooks";

import styles from "./WeatherWidget.module.css";

export const WeatherWidget = () => {
  const { weather } = useCity();

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
