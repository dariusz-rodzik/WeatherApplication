import * as GlobalTypes from "shared/types";

export interface Weather {
  min_temp: number;
  max_temp: number;
  weather_state_name: string;
  wind_speed: number;
  applicable_date: string;
}

export interface Props {
  day: Weather;
  index: number;
  degrees: GlobalTypes.Degrees;
}
