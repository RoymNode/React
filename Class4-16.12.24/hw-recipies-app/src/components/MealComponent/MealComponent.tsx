import { useEffect, useState } from 'react';
import './MealComponent.css';
type MealProps = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

type InstructionsProps = {
  meals :[{
    strInstructions: string;
  }];
};


export const MealComponent: React.FC<MealProps> = ({strMeal, strMealThumb, idMeal}) => {
    const [showInstructions, setShowInstructions] = useState(false);
    const [instructionsData, setInstructionsData] = useState<InstructionsProps>();

    useEffect(() => {
        fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(
                (instructionsData) => {
                    setInstructionsData(instructionsData);
                    console.log(instructionsData);
                }
            );
    }, []);

    return (
        <div className='meal-container' onClick={() => setShowInstructions(!showInstructions)}>
           
                <div className='name-details'>
                    <div>
                        <h2>{strMeal}</h2>
                    </div>
                    <div>
                        <img src={strMealThumb} alt={strMeal} />
                    </div>
                     {showInstructions }
                </div>
                <div className='meal-instructions'>
                {showInstructions && (
                  <div className="instructions">
                  {
                   instructionsData?.meals?.map((inst) => {
                            return <p>{inst.strInstructions}</p>
                    })
                  }
                  </div>
                )}  
              </div>
       </div>
    );
};