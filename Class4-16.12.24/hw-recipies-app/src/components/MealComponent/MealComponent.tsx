import './MealComponent.css';
type MealProps = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}


export const MealComponent: React.FC<MealProps> = ({strMeal, strMealThumb, idMeal}) => {
    return (
        <div className='meal-container'>
            
                <div className='name-details'>
                    <div>
                        <h2>{strMeal}</h2>
                    </div>
                    <div>
                        <img src={strMealThumb} alt={strMeal} />
                    </div>
                </div>
                <div className='meal-instructions'>
sdsdsd
                </div>
       </div>
    );
};