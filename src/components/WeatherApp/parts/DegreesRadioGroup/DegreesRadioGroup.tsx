import * as Types from "./DegreesRadioGroup.types";
import * as GlobalTypes from "shared/types";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const DegreesRadioGroup = ({ degrees, setDegrees }: Types.Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDegrees(+event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Degrees</FormLabel>
      <RadioGroup
        aria-label="deegres"
        name="controlled-radio-buttons-group"
        value={degrees}
        onChange={handleChange}
      >
        <FormControlLabel
          value={GlobalTypes.Degrees.Celcius}
          control={<Radio />}
          label="Celcius"
        />
        <FormControlLabel
          value={GlobalTypes.Degrees.Fahrenheit}
          control={<Radio />}
          label="Fahrenheit"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default DegreesRadioGroup;
