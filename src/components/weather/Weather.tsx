import { useState } from "react";
import { CitySearch } from "./CitySearch";
import { WeatherWidget } from "./WeatherWidget";

export const Weather = () => {
  const [city, setCity] = useState('Norwich');

  return (
    <>
      <CitySearch setCity={setCity} />
      <WeatherWidget city={city} />
    </>
  )
}
