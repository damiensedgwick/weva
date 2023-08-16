import { useState } from "react";
import { CitySearch } from "./CitySearch";
import { WeatherWidget } from "./WeatherWidget";
import styles from "./Weather.module.css";

interface Props {
  location: string;
}

export const Weather = ({ location }: Props) => {
  const [city, setCity] = useState(location);

  return (
    <div className={styles.weather}>
      <WeatherWidget city={city} />
      <CitySearch setCity={setCity} />
    </div>
  );
};
