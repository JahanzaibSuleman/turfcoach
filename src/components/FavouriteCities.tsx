import { FC, memo } from 'react';
import { City, FavouriteCitiesProps } from '../types';
import { FavouriteCityListItem } from './FavourityCityListItem';

export const FavouriteCities: FC<FavouriteCitiesProps> = memo(({ favouriteCities, setSelectedCity, removeFromFavourites }) => {
    return (
        <div className='favorite-cities-container'>
            <ul>
                {favouriteCities.map((city: City, index: number) => {
                    return (
                        <FavouriteCityListItem
                            key={index}
                            city={city}
                            setSelectedCity={setSelectedCity}
                            removeFromFavourites={removeFromFavourites}
                        />
                    );
                })}
            </ul>
        </div>
    );
});

// Use memo to memoize the component for performance optimization
