import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/citiesSlice";
import { forEachChild } from "typescript";

interface CityCardProps {
  id: number;
  name: string;
  imageUrl: string
  isFavorite: boolean;
};

const CityCard: React.FC<CityCardProps> = ({id, name, imageUrl, isFavorite}) => {
    const dispatch = useDispatch();
    const handleFavoriteToggle = () => {
        dispatch(toggleFavorite(id));
    };
    return (
    <div>
        <h3>{name}</h3>
        <img src={imageUrl} />
        <button onClick={handleFavoriteToggle}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  )
}

export default CityCard