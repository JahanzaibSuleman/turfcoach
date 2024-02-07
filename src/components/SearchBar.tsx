import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import getCities from '../apis/getCities';
import { useDebounce } from '../custom-hooks';
import { City, SearchBarProps } from '../types';

export const SearchBar: FC<SearchBarProps> = ({ setSelectedCity }) => {
    const [searchKey, setSearchKey] = useState('');

    // Debounce the search key to improve performance
    const debouncedSearchKey = useDebounce<string>(searchKey, 300);

    // Fetch cities data based on the debounced search key
    const { data: cities, isLoading, isError } = useQuery<City[]>(['cities', debouncedSearchKey],
        () => getCities(debouncedSearchKey), {
        enabled: debouncedSearchKey.length >= 1
    });

    return (
        <div className='search-container'>
            <input
                placeholder='Enter city name'
                className='search-bar'
                onChange={e => setSearchKey(e.target.value)}
            />
            {isError && <p className='error-message'>Error! Something went wrong</p>}
            {isLoading ? (
                <p className='loading-message'>Loading...</p>
            ) : (
                <ul className='city-data'>
                    {cities?.map((city, index) => {
                        const { name, country } = city;

                        return (
                            <li key={index} onClick={() => setSelectedCity(city)}>
                                <span className='city-name'>{name}, </span>
                                <span className='country'>{country}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}
