import { useState } from "react";
import { CitySearch } from "./CitySearch";
import { WeatherWidget } from "./WeatherWidget";
import styles from "./Weather.module.css";

export const Weather = () => {
  const [city, setCity] = useState("Norwich");

  return (
    <div className={styles.weather}>
      <CitySearch setCity={setCity} />
      <WeatherWidget city={city} />
    </div>
  );
};
