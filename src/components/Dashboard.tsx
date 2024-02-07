import { FC, useCallback, useState } from 'react';
import { City } from '../types';
import { FavouriteCities } from './FavouriteCities';
import { SearchBar } from './SearchBar';
import { WeatherDetails } from './WeatherDetails';

export const Dashboard: FC = () => {
    const [selectedCity, setSelectedCity] = useState<City>({
        name: '',
        lat: undefined,
        lon: undefined,
        country: '',
    });

    const [favouriteCities, setFavouriteCities] = useState<City[]>([]);

    // Function to add the selected city to favorites
    const addToFavourite = () => {
        setFavouriteCities((prev) => {
            // Check if the city is already in favorites
            const isAlreadyPresent = prev.some((city) =>
                city.lat === selectedCity.lat && city.lon === selectedCity.lon
            );

            // Add the city to favorites if it's not already there
            if (!isAlreadyPresent) {
                return [...prev, selectedCity];
            }

            return prev; // Return the previous state if the city is already favorited
        });
    };

    // Function to remove a city from favorites
    const removeFromFavourites = useCallback((city: City) => {
        // Filter out the city from the favorites list
        const fCities = favouriteCities.filter((fCity) => {
            return fCity.lat !== city.lat || fCity.lon !== city.lon;
        });

        // Update the state with the filtered list
        setFavouriteCities(fCities);
    }, [favouriteCities]);

    return (
        <div className='container'>
            <SearchBar setSelectedCity={setSelectedCity} />

            <div className='weather-row'>
                {/* Conditionally render WeatherDetails if a city is selected */}
                {selectedCity.name && (
                    <WeatherDetails
                        selectedCity={selectedCity}
                        addToFavourite={addToFavourite}
                    />
                )}

                {/* Conditionally render FavouriteCities if there are favorite cities */}
                {!!favouriteCities.length && (
                    <FavouriteCities
                        favouriteCities={favouriteCities}
                        setSelectedCity={setSelectedCity}
                        removeFromFavourites={removeFromFavourites}
                    />
                )}
            </div>
        </div>
    );
};
