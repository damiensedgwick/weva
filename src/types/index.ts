interface WeatherWidgetProps {
  city: string;
}

interface CityWeatherResponse {
  "coord": Coord,
  "weather": Weather[],
  "base": string,
  "main": Main,
  "visibility": number,
  "wind": Wind,
  "clouds": Clouds,
  "dt": number,
  "sys": Sys,
  "timezone": number,
  "id": number,
  "name": string,
  "cod": number
}

interface Coord {
  "lon": number,
  "lat": number
}

interface Main {
  "temp": number,
  "feels_like": number,
  "temp_min": number,
  "temp_max": number,
  "pressure": number,
  "humidity": number
}

interface Sys {
  "type": number,
  "id": number,
  "country": string,
  "sunrise": number,
  "sunset": number
}

interface Clouds {
  "all": number
}

interface Weather {
  "id": number,
  "main": string,
  "description": string,
  "icon": string
}

interface Wind {
  "speed": number,
  "deg": number
}

export type {
  WeatherWidgetProps,
  CityWeatherResponse,
}
