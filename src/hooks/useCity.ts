import { useEffect, useState } from "react";
import { useDebounce } from "hooks";
import { CityWeatherResponse } from "components/weather/types";

export const useCity = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<CityWeatherResponse | null>(null);
  const debouncedValue = useDebounce<string>(city, 750);

  useEffect(() => {
    let ignore = false;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        debouncedValue ? debouncedValue : "Norwich"
      }&APPID=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!ignore && data.cod === 200) {
          setWeather(data);
        }
      });

    return () => {
      ignore = true;
    };
  }, [debouncedValue]);

  return {
    city,
    setCity,
    weather
  };
};
