import axios from "axios";
import { useEffect, useState } from "react";
import * as Types from "./geolocation.types";
import { API_URL } from "shared/consts";

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (x) =>
        axios
          .get<Types.CoordinatesCity[]>(
            `${API_URL}location/search/?lattlong=${x.coords.latitude.toString()},${x.coords.longitude.toString()}`,
            {
              headers: { "Access-Control-Allow-Origin": "*" },
            }
          )
          .then((res) => setGeolocation(res.data[0].woeid.toString())),
      () => {
        alert("No location given, Warsaw is set as default location.");
        setGeolocation("523920");
      }
    );
  }, []);

  return geolocation;
};

export default useGeolocation;
