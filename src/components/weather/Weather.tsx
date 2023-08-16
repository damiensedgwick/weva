import { useState } from "react";
import { CitySearch } from "./CitySearch";
import { WeatherWidget } from "./WeatherWidget";
import styles from "./Weather.module.css";

export const Weather = () => {
  const [city, setCity] = useState("Norwich");

  return (
    <div className={styles.weather}>
      <WeatherWidget city={city} />
      <CitySearch setCity={setCity} />
    </div>
  );
};
