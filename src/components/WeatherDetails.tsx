import { ChangeEvent, FC, useState } from 'react';
import { useQuery } from 'react-query';
import getWeatherDetails from '../apis/getWeatherDetails';
import { WeatherData, WeatherDetailsProps } from '../types/weatherTypes';
import { celsiusToFahrenheit } from '../utils';
import { PhotoContainer } from './PhotoContainer';

export const WeatherDetails: FC<WeatherDetailsProps> = ({ selectedCity, addToFavourite }) => {
    const { lat, lon } = selectedCity;

    // Fetch weather details using useQuery hook, passing latitude and longitude as dependencies
    const { data: weatherData, isLoading, isError } = useQuery<WeatherData>(['cities', lat, lon], () =>
        getWeatherDetails(lat, lon)
        , { enabled: !!(lat && lon) });

    const [isFahrenheit, setIsFahrenheit] = useState(false);

    // Destructure weather and main data from weatherData
    const { weather, main } = weatherData ?? { weather: [] };
    const { temp, feels_like, temp_min, temp_max, humidity } = main ?? {};
    const { description } = weather[0] ?? '';

    // Function to format temperature based on selected unit
    const getTempuratureAsPerUnit = (temperature: number | undefined): string => {
        if (!temperature) {
            return '';
        }

        const roundedTemp = Math.round(temperature);

        return isFahrenheit
            ? `${celsiusToFahrenheit(roundedTemp)} °F`
            : `${roundedTemp} °C`;
    }

    // Handler to switch between Fahrenheit and Celsius units
    const onSwitchingUnit = (e: ChangeEvent<HTMLInputElement>) => {
        setIsFahrenheit(e.target.checked);
    }

    return (
        <div className='weather-details-container'>
            {isLoading && <p className='loading-message'>Loading...</p>}
            {weatherData &&
                <>
                    <PhotoContainer selectedCity={selectedCity} />
                    {/* Button to add to favorites */}
                    <button onClick={addToFavourite}>Add to favourite</button>
                    {/* Toggle button for switching temperature units */}
                    <label className='switch'>
                        <input type='checkbox' onChange={onSwitchingUnit} />
                        <span className='slider round' />
                    </label><span className='bold-text'>Switch Unit</span>
                    <p><span className='bold-text'>Description:</span> {description}</p>
                    <p><span className='bold-text'>Temperature:</span> {getTempuratureAsPerUnit(temp)}</p>
                    <p><span className='bold-text'>Feels Like:</span> {getTempuratureAsPerUnit(feels_like)}</p>
                    <p><span className='bold-text'>Min Temperature:</span> {getTempuratureAsPerUnit(temp_min)}</p>
                    <p><span className='bold-text'>Max Temperature:</span> {getTempuratureAsPerUnit(temp_max)}</p>
                    <p><span className='bold-text'>Humidity:</span> {humidity}%</p>
                </>
            }
            {isError && <p className='error-message'>Error! Something went wrong</p>}
        </div>
    );
}
