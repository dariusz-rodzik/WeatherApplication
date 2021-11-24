import * as Styles from "./WeatherApp.styles";
import axios from "axios";
import { useEffect, useState } from "react";
import * as Types from "./WeatherApp.types";
import * as GlobalTypes from "shared/types";
import useGeolocation from "utils/hooks/useGeolocation";
import { TextField, Button } from "@mui/material";
import WeatherDetails from "./parts/WeatherDetails";
import DegreesRadioGroup from "./parts/DegreesRadioGroup";
import { API_URL } from "shared/consts";

const WeatherApp = () => {
  const geolocation = useGeolocation();
  const [inputCity, setInputCity] = useState("");
  const [degrees, setDegrees] = useState(GlobalTypes.Degrees.Celcius);
  const [cityWeather, setCityWeather] = useState<Types.ConsolidedWeather>({
    consolidated_weather: [],
    title: "",
  });
  const [cityId, setCityId] = useState<string>(
    localStorage.getItem("city") ?? ""
  );

  useEffect(() => {
    if (!localStorage.getItem("city")) setCityId(geolocation);
  }, [geolocation]);

  const getCityId = () => {
    axios
      .get<Types.City[]>(`${API_URL}location/search/?query=${inputCity}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => setCityId(res.data[0].woeid))
      .catch(() =>
        alert("Failed to download data. Please enter a valid city.")
      );
  };

  useEffect(() => {
    if (cityId) {
      localStorage.setItem("city", cityId);
      axios
        .get<Types.ConsolidedWeather>(`${API_URL}location/${cityId}`, {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => setCityWeather(res.data))
        .catch(() =>
          alert("Failed to download data. Please enter a valid city.")
        );
    }
  }, [cityId]);

  return (
    <Styles.WeatherBox>
      <TextField
        id="outlined-basic"
        label="City"
        variant="outlined"
        onChange={(e) => setInputCity(e.target.value)}
        value={inputCity}
      />
      <Button variant="outlined" onClick={getCityId} sx={{ mt: "8px" }}>
        Get weather
      </Button>
      <h1>{cityWeather.title}</h1>
      <DegreesRadioGroup degrees={degrees} setDegrees={setDegrees} />
      <Styles.DetailsBox>
        {cityWeather.consolidated_weather.slice(0, 3).map((day, index) => (
          <WeatherDetails
            day={day}
            index={index}
            degrees={degrees}
            key={day.applicable_date}
          />
        ))}
      </Styles.DetailsBox>
    </Styles.WeatherBox>
  );
};

export default WeatherApp;
