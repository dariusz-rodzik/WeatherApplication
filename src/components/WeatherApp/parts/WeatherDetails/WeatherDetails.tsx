import { CardContent } from "@mui/material";
import * as Types from "./WeatherDetails.types";
import * as Styles from "./WeatherDetails.styles";

const WeatherDetails = ({ day, index, degrees }: Types.Props) => {
  const renderSwitch = (day: number) => {
    switch (day) {
      case 0:
        return "Today";
      case 1:
        return "Tomorrow";
      case 2:
        return "Day after tomorrow";
    }
  };
  return (
    <Styles.WeatherCard>
      <CardContent>
        <Styles.Day>{renderSwitch(index)}</Styles.Day>
        <Styles.Date>{day.applicable_date}</Styles.Date>
        <Styles.Temp>
          {degrees === 1
            ? `Max temp: ${day.max_temp.toPrecision(3)} Celcius`
            : `Max temp: ${(day.max_temp * 1.8 + 32.0).toPrecision(
                3
              )} Fahrenheit`}
        </Styles.Temp>
        <Styles.Temp>
          {degrees === 1
            ? `Min temp: ${day.min_temp.toPrecision(3)} Celcius`
            : `Min temp: ${(day.min_temp * 1.8 + 32.0).toPrecision(
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
