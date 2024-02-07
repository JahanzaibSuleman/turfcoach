import { City } from "./cityTypes";

export interface Photo {
  id: number;
  url: string;
  src: {
    landscape: string;
  };
  alt: string;
}

export interface PhotoData {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page: string;
}

export interface PhotoContainerProps {
  selectedCity: City;
}
