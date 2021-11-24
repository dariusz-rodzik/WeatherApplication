import styled from "styled-components";
import { Card, Typography } from "@mui/material";

export const Day = styled(Typography)`
  font-size: 18px;
  color: grey;
  font-style: italic;
`;

export const Temp = styled(Typography)`
  color: gray;
  font-style: bold;
  margin-bottom: 3px;
`;

export const Date = styled.h5`
  color: black;
  font-size: 28px;
  margin-bottom: 6px;
  margin-top: 6px;
  font-family: arial;
`;

export const WeatherCard = styled(Card)`
  min-width: 275px;
`;
