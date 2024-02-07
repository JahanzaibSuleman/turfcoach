import { City } from "./cityTypes";

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  dt: number;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherDetailsProps {
  selectedCity: City;
  addToFavourite: () => void;
}
