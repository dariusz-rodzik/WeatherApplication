export interface City {
  title: string;
  location_type: string;
  woeid: string;
  latt_long: string;
}

export interface ConsolidedWeather {
  consolidated_weather: Weather[];
  title: string;
}

export interface Weather {
  min_temp: number;
  max_temp: number;
  weather_state_name: string;
  wind_speed: number;
  applicable_date: string;
}

export interface CoordinatesCity {
  distance: number;
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}
