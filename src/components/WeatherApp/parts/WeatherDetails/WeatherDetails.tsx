import { CardContent } from "@mui/material";
import * as Types from "./WeatherDetails.types";
import * as Styles from "./WeatherDetails.styles";
import { Degrees } from "shared/types";

const toFahrenheit = (temperature: number) => {
  return temperature * 1.8 + 32.0;
};

const renderDay = (day: number) => {
  switch (day) {
    case 0:
      return "Today";
    case 1:
      return "Tomorrow";
    case 2:
      return "Day after tomorrow";
  }
};

const WeatherDetails = ({ day, index, degrees }: Types.Props) => {
  return (
    <Styles.WeatherCard>
      <CardContent>
        <Styles.Day>{renderDay(index)}</Styles.Day>
        <Styles.Date>{day.applicable_date}</Styles.Date>
        <Styles.Temp>
          {degrees === Degrees.Celcius
            ? `Max temp: ${day.max_temp.toPrecision(3)} Celcius`
            : `Max temp: ${toFahrenheit(day.max_temp).toPrecision(
                3
              )} Fahrenheit`}
        </Styles.Temp>
        <Styles.Temp>
          {degrees === Degrees.Celcius
            ? `Min temp: ${day.min_temp.toPrecision(3)} Celcius`
            : `Min temp: ${toFahrenheit(day.min_temp).toPrecision(
                3
              )} Fahrenheit`}
        </Styles.Temp>
        <Styles.Temp>{`Weather state: ${day.weather_state_name}`}</Styles.Temp>
        <Styles.Temp>
          {`Wind speed: ${day.wind_speed.toPrecision(2)} kM/h`}
        </Styles.Temp>
      </CardContent>
    </Styles.WeatherCard>
  );
};

export default WeatherDetails;
