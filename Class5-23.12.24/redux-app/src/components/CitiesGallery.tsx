import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../features/citiesSlice';
import CityCard from './CityCard';
import { RootState, AppDispatch } from '../store'; 
import { City } from '../types';

const CitiesGallery: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>(); 
    const { cities, status } = useSelector((state: RootState) => state.cities);

    useEffect(() => {
        dispatch(fetchCities()); 
    }, [dispatch]);

    if (status === 'loading') {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            {cities.map((product: City) => (
                <CityCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default CitiesGallery;