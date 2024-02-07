import { FC } from 'react';
import { useQuery } from 'react-query';
import getPhoto from '../apis/getPhoto';
import { PhotoContainerProps, PhotoData } from '../types';

export const PhotoContainer: FC<PhotoContainerProps> = ({ selectedCity }) => {
    const { name, country } = selectedCity;

    // Fetch photo data using useQuery hook, passing city name and country as dependencies
    const { data: photoData, isLoading, isError } = useQuery<PhotoData>(['photo', name, country], () =>
        getPhoto(name)
        , { enabled: !!(name && country) });

    const { photos } = photoData ?? { photos: [] };
    const { src: { landscape: photoUrl = '' } = {}, alt } = photos[0] ?? {};

    return (
        <div className='photo-container'>
            {isLoading ? <p className='loading-message'>Loading...</p> :
                photoUrl && <img alt={alt} src={photoUrl} />}
            {isError && <p className='error-message'>Error! Something went wrong</p>}
        </div>
    );
}
