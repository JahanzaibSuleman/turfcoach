import { render, screen, fireEvent } from '@testing-library/react';
import { FavouriteCityListItem } from './FavourityCityListItem';

describe('FavouriteCityListItem component', () => {
    const city = { name: 'New York', country: 'US', lat: 40.7128, lon: -74.006 };
    const setSelectedCity = jest.fn();
    const removeFromFavourites = jest.fn();

    beforeEach(() => {
        render(
            <FavouriteCityListItem
                city={city}
                setSelectedCity={setSelectedCity}
                removeFromFavourites={removeFromFavourites}
            />
        );
    });

    test('renders city name correctly', () => {
        const cityNameElement = screen.getByText('New York');
        expect(cityNameElement).toBeInTheDocument();
    });

    test('triggers setSelectedCity function when city name is clicked', () => {
        const cityNameElement = screen.getByText('New York');
        fireEvent.click(cityNameElement);
        expect(setSelectedCity).toHaveBeenCalledWith(city);
    });

    test('triggers removeFromFavourites function when remove button is clicked', () => {
        const removeButton = screen.getByText('remove');
        fireEvent.click(removeButton);
        expect(removeFromFavourites).toHaveBeenCalledWith(city);
    });
});
