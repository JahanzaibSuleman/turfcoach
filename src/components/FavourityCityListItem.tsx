import { FC, memo } from 'react';
import { FavouriteCityListItemProps } from '../types';

export const FavouriteCityListItem: FC<FavouriteCityListItemProps> = memo(
    ({ city, setSelectedCity, removeFromFavourites }) => {
        return (
            <li onClick={() => setSelectedCity(city)}>
                {/* Display the city name and handle click to set it as selected */}
                <span>{city.name}</span>

                {/* Remove button to remove the city from favorites */}
                <button onClick={() => removeFromFavourites(city)}>remove</button>
            </li>
        );
    }
);

// Use memo to memoize the component for performance optimization
