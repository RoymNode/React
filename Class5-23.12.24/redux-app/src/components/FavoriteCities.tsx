import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CityCard from './CityCard';
import { City } from '../types';

const FavoriteCities: React.FC = () => {
    const cities = useSelector((state: RootState) => 
        state.cities.cities.filter(city => city.isFavorite)
    );

  return (
    <div>
        {cities.length === 0 ? (
            <div>No favorite cities</div>
        ) : (
            cities.map((city: City) => <CityCard key={city.id} {...city} />)
        )}
    </div>
  );
};

export default FavoriteCities