export interface City {
  name: string;
  lat: number | undefined;
  lon: number | undefined;
  country: string;
  state?: string;
}

export interface SearchBarProps {
  setSelectedCity: (city: City) => void;
}

export interface FavouriteCitiesProps {
  favouriteCities: City[];
  setSelectedCity: (city: City) => void;
  removeFromFavourites: (city: City) => void;
}

export interface FavouriteCityListItemProps {
  city: City;
  setSelectedCity: (city: City) => void;
  removeFromFavourites: (city: City) => void;
}
